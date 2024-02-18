import express from 'express'
import {test} from "../controllers/User_controllers.js"

const Router=express.Router();

Router.get('/test',test);

export default Router;