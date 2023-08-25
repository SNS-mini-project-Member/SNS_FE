import {apiClient} from "./ApiClient";
export const commentBtn = (id) => apiClient.get(`/api/v1/board/${id}`)
