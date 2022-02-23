import { API } from "hooks/useApi";

class AuthService {
  async login({ email, password }: any) {
    const res = await API.post("auth/login", { email, password });
    localStorage.setItem("user", JSON.stringify(res.data));
    return res.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user: any) {
    return API.post("/auth/register", { user });
  }
}

export default new AuthService();
