import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
//   console.log(req.body);
  //save detalis on mongo db
  const { username, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password:hashPassword });
  //handle the error and display the error
  try{
    await newUser.save();
    res.status(201).json("user created succefully");
  }
  catch(error){
    res.status(500).json(error.message);
  }
};