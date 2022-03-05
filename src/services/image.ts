import { API } from "hooks/useApi";

class ImageService {
  createPost(data: FormData) {
    return API.post("/upload", data);
  }
}

export default new ImageService();
