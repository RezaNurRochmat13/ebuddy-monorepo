import express from "express";
import UsersController from "./../controller/users.controller";
import useUserMiddleware from "../middleware/auth.middleware";

const userRouter = express.Router();
userRouter.use(useUserMiddleware)
const { index, show, create, update, destroy } = UsersController()

userRouter.get("/users", index);
userRouter.get("/users/:id", show);
userRouter.post("/users", create);
userRouter.put("/users/:id", update);
userRouter.delete("/users/:id", destroy);

export default userRouter;
