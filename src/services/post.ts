import { API } from "hooks/useApi";
import type { NewPost } from "types/Post";

class PostService {
  createPost(post: NewPost) {
    return API.post("/posts", post);
  }
}

export default new PostService();
