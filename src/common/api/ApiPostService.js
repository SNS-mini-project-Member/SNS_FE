import {apiClient} from "./ApiClient";

export const executeJwtAuthenticationTokenService = (username, password) => apiClient.post('/api/v1/authenticate', {username, password})

export const userLogin = (email, password) => apiClient.post('/api/v1/users/login', {email, password});

export const userSignup = (email, password, name, age, phone) => apiClient.post('/api/v1/users/signup', {email, password, name, age, phone})

export const emailCheck = (email) => apiClient.post(`/api/v1/mail`, {email})

export const sendTmpPw = (email) => apiClient.post(`/api/v1/mail/pwChange`, {email})

export const updatePw = (email, password) => apiClient.post('/api/v1/users/update', {email, password})

export const insertBoard = (userSeq, contents, media) => apiClient.post('/api/v1/boards', {userSeq, contents, media})

<<<<<<< HEAD
export const likeBtn = (userSeq, boardSeq) => apiClient.post('/api/v1/likes', {userSeq, boardSeq})

export const bookBtn = (userSeq, bookSeq) => apiClient.post('/api/v1/book', {userSeq, bookSeq})

export const reCommentBtn = (userSeq, reCommentSeq) => apiClient.post('/api/v1/recomment', {userSeq, reCommentSeq})

export const insertComment = (userSeq, boardSeq, commentData) => apiClient.post('/api/v1/comment', {userSeq, boardSeq, commentData})

export const validToken = (token) => apiClient.post('/api/v1/users/validToken', {token})
