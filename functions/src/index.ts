import * as functions from "firebase-functions";
import express, { Application } from "express";
import bodyParse from "body-parser";
import cors from "cors";
import post from "./routes/posts/index";
import errorHandler from "./utils/errorHandler";

const app: Application = express();
app.use(bodyParse.json());
app.use(cors());

app.use("/api/post", post);
app.use(errorHandler);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export default {
  list: functions.https.onRequest(app),
};

//export const post = functions.https.onRequest(app);
