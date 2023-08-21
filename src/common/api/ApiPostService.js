import {apiClient} from "./ApiClient";

export const executeJwtAuthenticationTokenService = (username, password) => apiClient.post('/api/v1/authenticate', {username, password})

export const userLogin = (email, password) => apiClient.post('/api/v1/users/login', {email, password})

export const userSignup = (email, password, name, age, phone) => apiClient.post('/api/v1/users/signup', {email, password, name, age, phone})

export const emailCheck = (email) => apiClient('/api/v1/users/login', {email})