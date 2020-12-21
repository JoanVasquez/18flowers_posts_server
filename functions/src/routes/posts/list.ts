import { Request, Response, NextFunction } from "express";
import PostService from "../../services/PostService";
import { onSuccess } from "../../utils/response";

const postService: PostService = new PostService();

export default (req: Request, res: Response, next: NextFunction): void => {
  if (!res.headersSent) {
    postService
      .list()
      .then((posts) => res.status(200).send(onSuccess(posts)))
      .catch((ex) => next(ex));
  }
};
