import { Request, Response, NextFunction } from "express";

const validations = async (req: Request, res: Response, next: NextFunction) => {
  interface SignupData {
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    passwordTwo?: string;
    checked?: string;
  }

  const errors: SignupData = {};
  if (req.path === "/signup") {
    const {
      username,
      firstName,
      lastName,
      email,
      password,
      passwordTwo,
      checked,
    } = await req.body;
    // Username
    if (username.length === 0) errors["username"] = "Username can not be empty";
    // First Name
    if (firstName !== firstName.charAt(0).toUpperCase() + firstName.slice(1))
      errors["firstName"] = "Please enter a valid first name";
    if (firstName.length === 0)
      errors["firstName"] = "First name can not be empty";

    // Last Name
    if (lastName !== lastName.charAt(0).toUpperCase() + lastName.slice(1))
      errors["lastName"] = "Please enter a valid last name";
    if (lastName.length === 0)
      errors["lastName"] = "Last name can not be empty";

    // Email
    if (email.length === 0) {
      errors["email"] = "Email can not be empty";
    } else if (
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      ) === false
    ) {
      errors["email"] = "Please enter a valid email";
    }
    if (password.length === 0)
      // Password
      errors["password"] = "Password can not be empty";

    // Password 2
    if (password !== passwordTwo)
      errors["passwordTwo"] = "Passwords must match";
    if (passwordTwo.length === 0)
      errors["passwordTwo"] = "Please confirm your password";
    // Checked
    if (!checked) errors["checked"] = "Please check terms and conditions";
  } else if (req.path === "/signin") {
    const { username, password } = await req.body;
    // Username
    if (username.length === 0) errors["username"] = "Username can not be empty";
    // Password
    if (password.length === 0) errors["password"] = "Password can not be empty";
  }

  if (Object.values(errors).length >= 1) {
    return res.status(401).json({ err: { ...errors } });
  }
  next();
};

const verifyToken = (req: Request, res: Response, next: NextFunction) => {};
export { validations, verifyToken };
