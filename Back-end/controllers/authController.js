import { db } from "../config/firebase.js";
import { collection, doc, getDoc, updateDoc, query, where, getDocs, addDoc } from "firebase/firestore";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

export const register = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, phone, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    console.log("Received data:", req.body); // Log received data
    const hashedPassword = await bcrypt.hash(password, 10);
    const docRef = await addDoc(collection(db, "users"), {
      firstname,
      lastname,
      email,
      phone,
      password: hashedPassword,
    });
    console.log("Document written with ID: ", docRef.id); // Log document ID

    res.status(200).json({
      message: "User registered successfully",
      userId: docRef.id,
    });
  } catch (error) {
    console.error("Error adding document: ", error); // Log error
    res.status(400).json({
      message: error.message,
    });
  }
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const userDoc = querySnapshot.docs[0];
    const user = userDoc.data();
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: userDoc.id }, process.env.TOKEN_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({
      user,
      token,
    });
  } catch (error) {
    console.error("Error logging in: ", error);
    res.status(400).json({
      message: error.message,
    });
  }
});

export const requestPasswordReset = asyncHandler(async (req, res) => {
  // Implémentez la logique de demande de réinitialisation de mot de passe
});

export const resetPassword = asyncHandler(async (req, res) => {
  // Implémentez la logique de réinitialisation de mot de passe
});

export const getUserProfile = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  try {
    const userDoc = await getDoc(doc(db, "users", userId));
    if (!userDoc.exists()) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(userDoc.data());
  } catch (error) {
    console.error("Error getting user profile: ", error);
    res.status(400).json({
      message: error.message,
    });
  }
});

export const updateProfile = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { firstname, lastname, email, phone } = req.body;

  try {
    const userDocRef = doc(db, "users", userId);
    await updateDoc(userDocRef, {
      firstname,
      lastname,
      email,
      phone,
    });

    const updatedUserDoc = await getDoc(userDocRef);
    res.status(200).json(updatedUserDoc.data());
  } catch (error) {
    console.error("Error updating user profile: ", error);
    res.status(400).json({
      message: error.message,
    });
  }
});

