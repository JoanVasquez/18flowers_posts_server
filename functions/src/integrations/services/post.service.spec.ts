import Post from "../../models/Post";
import PostService from "../../services/PostService";
const postService = new PostService();

// Testing our functions are declared
test("PostService should exist", () => {
  expect(postService.list).toBeDefined();
  expect(postService.update).toBeDefined();
});

// testing list and updated
describe("PostService tests", () => {
  test("Testing list", async () => {
    expect((await postService.list()).length).toBeGreaterThan(0);
  });

  test("Testing update", async () => {
    const post: Post = {
      id: 1,
      userId: 2,
      title: "test",
      body: "test",
    };
    expect(await (await postService.update(post)).body).toEqual(post.body);
  });
});
