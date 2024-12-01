import { Router } from "express";
import { body } from "express-validator"
import { createAccount, login } from "./handlers";
import { handleInputErrors } from "./middleware/validation";

const router = Router();

/** Authentication and Registration routes */
router.post('/auth/register', 
    body('handle')
        .notEmpty()
        .withMessage('Handle is required'),
    body('name')
        .notEmpty()
        .withMessage('Name is required'),
    body('email')
        .isEmail()
        .withMessage('Email not valid'),
    body('password')
        .isLength({min: 8})
        .withMessage('Password must be at least 8 characters long'),
    handleInputErrors,
    createAccount
);

router.post('/auth/login', 
    body('email')
        .isEmail()
        .withMessage('Email not valid'),
    body('password')
        .notEmpty()
        .withMessage('Password is required'),
    handleInputErrors,
    login    
);

export default router;