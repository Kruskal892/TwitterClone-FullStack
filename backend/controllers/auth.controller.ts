import { Request, Response } from "express";

export const signup = async (req: Request, res:Response) => {
  res.json({
    data: "This is signed up route",
  });
};

export const login = async (req: Request, res:Response) => {
  res.json({
    data: "This is login route",
  });
};

export const logout = async (req: Request, res:Response) => {
  res.json({
    data: "This is logout route",
  });
};
