import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import userRouter from "../routes/user.routes";

dotenv.config();

const app: Express = express();
app.use(express.json());
// User Router
app.use(userRouter);

function useApp() {
    app.get("/", (req: Request, res: Response) => {
        res.send("Express + TypeScript Server");
    });

    return app
}

export { useApp }