import {apiClient} from "./ApiClient";

export const executeJwtAuthenticationTokenService = (username, password) => apiClient.post('/api/v1/authenticate', {username, password})

export const userLogin = (email, password) => apiClient.post('/api/v1/users/login', {email, password});

export const userSignup = (email, password, name, age, phone) => apiClient.post('/api/v1/users/signup', {email, password, name, age, phone})

export const emailCheck = (email) => apiClient.post(`/api/v1/mail`, {email})

export const sendTmpPw = (email) => apiClient.post(`/api/v1/mail/pwChange`, {email})

export const updatePw = (email, password) => apiClient.post('/api/v1/users/update', {email, password})

export const validToken = (token) => apiClient.post('/api/v1/users/validToken', {token})