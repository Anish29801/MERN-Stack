import axios from "axios";
import { PROXY } from "../backend";

export const getTasks = (token, profileId, todoId) => {
  return axios
    .get(`${PROXY}/tasks/get/${profileId}/${todoId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const editTask = (profileId, taskId, data, token) => {
  return axios
    .put(`${PROXY}/task/update/${profileId}/${taskId}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const removeTask = (token, profileId, taskId) => {
  return axios
    .delete(`${PROXY}/task/remove/${profileId}/${taskId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const createTask = (token, profileId, todoId, data) => {
  return axios
    .post(`${PROXY}/task/create/${profileId}/${todoId}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};
