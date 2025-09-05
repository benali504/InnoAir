import express from "express";
import { validateRequest } from "../middlewares/validation.js";
import { register, login, requestPasswordReset, resetPassword, getUserProfile, updateProfile } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", validateRequest, register);
router.post("/login", validateRequest, login);
router.get("/profile", authMiddleware, getUserProfile);
router.put("/profile", authMiddleware, updateProfile);
router.post("/request-password-reset", validateRequest, requestPasswordReset);
router.post("/reset-password", validateRequest, resetPassword);

export default router;