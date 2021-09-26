import express, { Request, Response } from "express";

const healthcheckRouter = express.Router();

healthcheckRouter.get("/healthcheck", (req: Request, res: Response) => {
  res.send("Server is running");
});

export default healthcheckRouter;
