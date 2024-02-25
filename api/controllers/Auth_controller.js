import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
export const signup = async (req, res, next) => {
  //save detalis on mongo db
  const { username, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });

  //handle the error and display the error
  try {
    await newUser.save();
    res.status(201).json("user created succefully");
  } catch (error) {
    next(error); //this error handling comes from middle ware
  }
  // catch (error) {
  //   next(errorHandler(500,'Error from function')) //this is a custom made error.These arguments are passed to errorHandler function
  // }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email }); //await keyword to take sometime to find the email
    if (!validUser) return next(errorHandler(404, "User Not Found!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Invalid Password"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRETE);
    //remove password from sending to user. Don't send back passsword the user
    //seperate pass(password) from rest of the information
    const {password:pass,...rest}=validUser._doc;
    res
      .cookie("accessToken", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
