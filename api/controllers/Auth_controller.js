import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res,next) => {
  
  //save detalis on mongo db
  const { username, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });
  
  //handle the error and display the error
  try {
    await newUser.save();
    res.status(201).json("user created succefully");
  } catch (error) {
    next(error) //this error handling comes from middle ware
  }
  // catch (error) {
  //   next(errorHandler(500,'Error from function')) //this is a custom made error.These arguments are passed to errorHandler function
  // }
};
