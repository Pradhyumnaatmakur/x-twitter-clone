import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 60 * 24 * 24 * 1000,
    sameSite: "strict",
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
  });
};
