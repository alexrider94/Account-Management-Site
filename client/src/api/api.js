import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5557/api",
});

const insertUser = (payload) => {
  api.post("/insertUser", payload);
};

const login = async (payload) => {
  let result;

  result = await api.post("/login", payload);

  console.log("login result " + result);
  return result;
};
const apis = {
  insertUser,
  login,
};

export default apis;
