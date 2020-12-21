import Post from "../models/Post";
import axios, { AxiosResponse } from "axios";
import Error from "../models/Error";
import errors from "../errors/errors.json";

export default class PostService {
  private posts: Array<Post> = [];
  private serverError: Error = JSON.parse(JSON.stringify(errors.serverError));

  public async list(): Promise<Array<Post>> {
    try {
      const result: AxiosResponse = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.posts = result.data;

      return this.posts;
    } catch (ex) {
      this.serverError.message += ` ${ex.response.data}`;
      throw this.serverError;
    }
  }

  public async update(post: Post): Promise<Post> {
    try {
      const result: AxiosResponse = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`,
        post
      );
      return result.data;
    } catch (ex) {
      this.serverError.message += ` ${ex.response.data}`;
      throw this.serverError;
    }
  }
}
