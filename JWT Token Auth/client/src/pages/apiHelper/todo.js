import axios from "axios";
import { PROXY } from "../../backend";

export const createTodo = (profileId, data, token) => {
  return axios
    .post(`${PROXY}/todo/create/${profileId}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const getTodos = (token) => {
  return axios
    .get(`${PROXY}/todos/get`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};
