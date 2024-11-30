import User from "../models/User";

export const createAccount = async (req, res) => {
    // await User.create(req.body); // Alternative way to create a new user
    
    const user = new User(req.body); 
    
    await user.save();

    res.send("User created successfully");
}