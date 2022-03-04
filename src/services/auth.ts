import { API } from "hooks/useApi";
import type { Auth } from "types/Auth";

class AuthService {
  async login({ email, password }: Auth) {
    const res = await API.post("auth/login", { email, password });
    localStorage.setItem("user", JSON.stringify(res.data));
    return res.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user: Auth) {
    return API.post("/auth/register", { user });
  }
}

export default new AuthService();
