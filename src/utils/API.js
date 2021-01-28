import axios from "axios";

const baseURL =
  "https://repertoire-recipes-back-end.herokuapp.com/" ||
  process.env.REACT_APP_API_URL ||
  "http://localhost:5000";

export const getAllRecipes = function (userData) {
  return axios.get(`${baseURL}getallrecipes`, userData);
};

export const getRecipe = function (userData) {
  return axios.get(`${baseURL}getrecipe/:id`, userData);
};

export const addNewRecipe = function (userData) {
  return axios.post(`${baseURL}addnewrecipe`, userData);
};

export const updateRecipe = function (userData) {
  return axios.put(`${baseURL}updaterecipe/:id`, userData);
};

export const deleteRecipe = function (userData) {
  return axios.delete(`${baseURL}deleterecipe/:id`, userData);
};
