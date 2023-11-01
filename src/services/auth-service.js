import api from "../api";
// import axios from "axios";

// const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return api
      .post("/auth/login", {
        username,
        password
      })
      .then(response => {
        if (response.data.jwtToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return api.post("/auth/register", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();