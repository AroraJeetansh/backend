import { Router } from "express";
import RegisterUser from "../controllers/user.controller.js";

const route = Router();

route.route("/register").post(RegisterUser)
export default Router;