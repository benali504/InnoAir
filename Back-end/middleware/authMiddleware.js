import jwt from "jsonwebtoken";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase.js";

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const userDoc = await getDoc(doc(db, "users", decoded.id));

    if (!userDoc.exists()) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = { id: userDoc.id, ...userDoc.data() };
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default authMiddleware;