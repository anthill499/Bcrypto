import { Request, Response, NextFunction } from "express";

const validations = (req: Request, res: Response, next: NextFunction) => {
  interface SignupData {
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    passwordTwo?: string;
    checked?: boolean;
  }
  const {
    username,
    firstName,
    lastName,
    email,
    password,
    passwordTwo,
    checked,
  } = req.body.data;
  const errors: SignupData = {};
  if (req.path === "signup") {
  } else if (req.path === "signin") {
  }

  if (Object.values(errors).length > 0) {
    return res.status(401).json({ ...errors });
  }
  next();
};

export { validations };
