import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5557/api",
});

const register = async (payload) => {
  const result = api.post("/register", payload);
  return result;
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
