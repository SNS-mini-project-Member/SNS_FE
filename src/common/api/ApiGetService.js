import {apiClient} from "./ApiClient";

export const commentBtn = (id) => apiClient.get(`/api/v1/board/${id}`)
export const boardIdGet = () => apiClient.get('/api/v1/board/1')

