import {apiClient} from "./ApiClient";


// export const emailValidService = (userId) => apiClient.post(`/api/v1/mail/${userId}`, {
//   email: userId
// })

export const executeJwtAuthenticationTokenService = (username, password) => apiClient.post('/api/v1/authenticate', {username, password})


