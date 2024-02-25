import express from 'express'
import { signup,signin } from '../controllers/Auth_controller.js';

const router=express.Router();

router.post("/signup",signup);
router.post("/signin",signin); // this endpoint is for localhost:3000 server. /sign-in is the jsx page 
export default router;