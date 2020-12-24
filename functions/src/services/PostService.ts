import Post from "../models/Post";
import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../constants/BASE_URL";

export default class PostService {
  //Make a request to get the posts
  public async list(): Promise<Array<Post>> {
    const result: AxiosResponse = await axios.get(`${BASE_URL}/posts`);
    return result.data;
  }

  // Make a request to update any post
  public async update(post: Post): Promise<Post> {
    const result: AxiosResponse = await axios.put(
      `${BASE_URL}/posts/${post.id}`,
      post
    );
    return result.data;
  }
}
