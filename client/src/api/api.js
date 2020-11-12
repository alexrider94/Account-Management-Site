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
  return result;
};

const authCheck = async (payload) => {
  const result = await api.post("/authCheck", payload);
  if (typeof result.data.result === "undefined") {
    return new Error(`no authCheck`);
  }
  return result;
}

const apis = {
  register,
  login,
  authCheck,
};

export default apis;
