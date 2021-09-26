import express, { Application, Request, Response } from "express";
import dotenv from 'dotenv'
import cors from 'cors';
import healthcheckRouter from "./routes/heathcheck";
import landingFormRouter from "./routes/landing-form";

dotenv.config();
const app: Application = express();

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(healthcheckRouter);
app.use(landingFormRouter)

const PORT: number = 3001;
app.listen(PORT, function () {
  console.log(`App is listening on port ${PORT} !`);
});
