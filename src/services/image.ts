import { API } from "hooks/useApi";

class Service {
  uploadPostImage(data: FormData) {
    return API.post("/upload", data);
  }
}

const ImageService = new Service();

export { ImageService };
