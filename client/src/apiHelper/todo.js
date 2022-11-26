import axios from "axios";
import { PROXY } from "../backend";

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

export const getTodo = (token, profileId, todoId) => {
  return axios
    .get(`${PROXY}/todo/get/${profileId}/${todoId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const updateTodo = (profileId, todoId, data, token) => {
  return axios
    .put(`${PROXY}/todo/update/${profileId}/${todoId}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const removeTodo = (token, profileId, todoId) => {
  return axios
    .delete(`${PROXY}/todo/remove/${profileId}/${todoId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};
