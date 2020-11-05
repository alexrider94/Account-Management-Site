import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5557/api",
});

const register = (payload) => {
  api.post("/register", payload);
};

const login = async (payload) => {
  const result = await api.post("/login", payload);
  // console.log(`${JSON.stringify(result)}`);
  return result;
};


const apis = {
  register,
  login,
};

export default apis;
