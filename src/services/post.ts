import { API } from "hooks/useApi";
import type { NewPost } from "types/Post";

class Service {
  createPost(post: NewPost) {
    return API.post("/posts", post);
  }
  getProfilePosts(username: string) {
    return API.get(`posts/profile/${username}`);
  }
  getTimelinePosts(id: string) {
    return API.get(`posts/timeline/${id}`);
  }
  likePost(postId: string, userId: string) {
    return API.put(`/posts/${postId}/like`, { userId });
  }
}

const PostService = new Service();

export { PostService };
