import { Router } from "express";
import { getUsers } from "../controllers/user.controller";
const userRouter:Router = Router();

userRouter.get("/get-users", getUsers)


export default userRouter;
