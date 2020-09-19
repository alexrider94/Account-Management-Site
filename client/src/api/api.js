import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5557/api",
});

const register = (payload) => {
  api.post("/register", payload);
};

const login = async (payload) => {
  let result;

  result = await api.post("/login", payload);

  console.log("login result " + result);
  return result;
};
const apis = {
  register,
  login,
};

export default apis;
