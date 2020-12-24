import { Request, Response, NextFunction } from "express";
import PostService from "../../services/PostService";
import { onSuccess } from "../../utils/response";
import errors from "../../errors/errors.json";

const postService: PostService = new PostService();
const serverError: Error = JSON.parse(JSON.stringify(errors.serverError));

export default (req: Request, res: Response, next: NextFunction): void => {
  // if response has not been send, call the service and send a response
  if (!res.headersSent) {
    postService
      .list()
      .then((posts) => res.status(200).send(onSuccess(posts)))
      .catch((ex) => next(serverError));
  }
};
serverError;
