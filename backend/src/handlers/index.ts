import type { Request, Response } from "express";
import slug from "slug";
import formidable from "formidable";
import { v4 as uuid } from "uuid";
import User from "../models/User";
import { checkPassword, hashPassword } from "../utils/auth";
import { generateJWT } from "../utils/jwt";
import cloudinary from "../config/cloudinary";

export const createAccount = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        const error = new Error("User with this email already exists");
        res.status(409).json({ error: error.message });
        return;
    }

    const handle = slug(req.body.handle, '');
    const handleExists = await User.findOne({ handle });
    if (handleExists) {
        const error = new Error("User with this handle already exists");
        res.status(409).json({ error: error.message });
        return;
    }

    const user = new User(req.body);
    user.password = await hashPassword(password);
    user.handle = handle;

    await user.save();

    res.status(201).send("User created successfully");
}

export const login = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
        const error = new Error("User does not exist");
        res.status(404).json({ error: error.message });
        return;
    }

    // Check if password is correct
    const isPasswordCorrect = await checkPassword(password, user.password);
    if (!isPasswordCorrect) {
        const error = new Error("Invalid password");
        res.status(401).json({ error: error.message });
        return;
    }

    const token = generateJWT({ id: user._id });

    res.send(token);
}

export const getUser = async (req: Request, res: Response) => {
    res.json(req.user);
}

export const updateProfile = async (req: Request, res: Response) => {
    try {
        const { description, links } = req.body;

        const handle = slug(req.body.handle, '');
        const handleExists = await User.findOne({ handle });
        if (handleExists && handleExists.email !== req.user.email) {
            const error = new Error("User with this handle already exists");
            res.status(409).json({ error: error.message });
            return;
        }

        // Update user
        req.user.description = description;
        req.user.handle = handle;
        req.user.links = links;
        await req.user.save();
        res.send("Profile updated successfully");

    } catch (e) {
        const error = new Error("Failed to update profile");
        res.status(500).json({ error: error.message });
        return;
    }
}

export const uploadImage = async (req: Request, res: Response) => {
    const form = formidable({ multiples: false });

    try {
        form.parse(req, (error, fields, files) => {
            cloudinary.uploader.upload(files.file[0].filepath, { public_id: uuid() }, async function (error, result) {
                if (error) {
                    const error = new Error("Failed to upload image");
                    res.status(500).json({ error: error.message });
                    return;
                }
                if (result) {
                    req.user.image = result.secure_url;
                    await req.user.save();
                    res.json({ image: result.secure_url });
                }
            })
        });
    } catch (e) {
        const error = new Error("Failed to upload image");
        res.status(500).json({ error: error.message });
        return;
    }
}