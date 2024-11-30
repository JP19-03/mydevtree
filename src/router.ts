import { Router } from "express";
import { createAccount } from "./handlers";

const router = Router();

/** Authentication and Registration routes */
router.post('/auth/register', createAccount);

export default router;