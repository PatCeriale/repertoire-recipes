import axios from "axios";

const baseURL =
  // "https://repertoire-sql-backend.herokuapp.com/" ||
  // process.env.REACT_APP_API_URL ||
  "http://localhost:8000";

export const getAllRecipes = function (userData) {
  return axios.get(`${baseURL}api/recipes`, userData);
};

export const getOneRecipe = function (userData) {
  return axios.get(`${baseURL}api/recipes/:id`, userData);
};

export const createRecipe = function (userData) {
  return axios.post(`${baseURL}api/newrecipe`, userData);
};

export const updateRecipe = function (userData) {
  return axios.put(`${baseURL}api/updaterecipe/:id`, userData);
};

export const deleteRecipe = function (userData) {
  return axios.delete(`${baseURL}api/deleterecipe/:id`, userData);
};
