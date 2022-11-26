import axios from "axios";
import { PROXY } from "../../backend";

export const signup = (data) => {
  return axios
    .post(`${PROXY}/signup`, data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const signin = (data) => {
  return axios
    .post(`${PROXY}/signin`, data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", JSON.stringify(data));
  }
  next();
};

export const isAuthenticate = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("token"));
  } else {
    return false;
  }
};
