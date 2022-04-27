import { API } from "hooks/useApi";

class Service {
  getUser(id: string) {
    return API.get(`/users?userId=${id}`);
  }
  getUserFriends(id: string) {
    return API.get("/users/friends/" + id);
  }
  followUser(id: string, userId: string) {
    return API.put(`/users/${id}/follow`, { userId });
  }
  unfollowUser(id: string, userId: string) {
    return API.put(`/users/${id}/unfollow`, { userId });
  }
}

const UserService = new Service();

export { UserService };
