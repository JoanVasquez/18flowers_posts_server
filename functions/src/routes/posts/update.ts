import { NextFunction, Request, Response } from "express";
import Post from "../../models/Post";
import PostService from "../../services/PostService";
import { onSuccess } from "../../utils/response";
import errors from "../../errors/errors.json";

const postService: PostService = new PostService();
const serverError: Error = JSON.parse(JSON.stringify(errors.serverError));

export default (req: Request, res: Response, next: NextFunction): void => {
  const post: Post = req.body;
  if (!res.headersSent) {
    postService
      .update(post)
      .then((updatedPost: Post) => res.status(200).send(onSuccess(updatedPost)))
      .catch((ex) => next(serverError));
  }
};
