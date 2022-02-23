import { API } from "hooks/useApi";
import authHeader from "./auth-header";

class UserService {
  getUser(id: string) {
    return API.get(`/user?userId=${id}`);
  }

  // getAdminBoard() {
  //   return axios.get(API_URL + "admin", { headers: authHeader() });
  // }
}

export default new UserService();