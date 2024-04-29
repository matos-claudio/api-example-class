import { Request, Response } from "express";
import { authenticate } from "../../models/user";

export const login = (req: Request, res: Response): void => {
  const { username, password } = req.body;
  if (authenticate(username, password)) {
    res.json({
      success: true,
      message: "Login successful",
    });
  } else {
    res
      .status(401)
      .json({ success: false, message: "Invalid username or password" });
  }
};
