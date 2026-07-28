import axios from 'axios';
const BASE_URL = 'http://localhost:5000/api';

export const fetchDepartments = async () => {
  const response = await axios.get(`${BASE_URL}/departments`);
  return response.data.data;
};
export const createDepartment = async (data) => {
  const response = await axios.post(`${BASE_URL}/departments`, data);
  return response.data;
};

export const fetchEmployees = async () => {
  const response = await axios.get(`${BASE_URL}/employees`);
  return response.data.data;
};
export const createEmployee = async (data) => {
  const response = await axios.post(`${BASE_URL}/employees`, data);
  return response.data;
};