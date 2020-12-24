import * as functions from "firebase-functions";
import express, { Application, Request, Response } from "express";
import bodyParse from "body-parser";
import cors from "cors";
import post from "./routes/posts/index";
import errorHandler from "./utils/errorHandler";
import errors from "./errors/errors.json";
import Error from "./models/Error";

const app: Application = express();
app.use(bodyParse.json());
app.use(cors());

app.use("/api/post", post);
// HANDLER 404
app.use("*", (req: Request, res: Response) => {
  const noFound: Error = JSON.parse(JSON.stringify(errors.noFound));
  errorHandler(noFound, req, res);
});
// MIDDLEWARE TO HANDLER EXCEPTIONS
app.use(errorHandler);

export default functions.https.onRequest(app);
