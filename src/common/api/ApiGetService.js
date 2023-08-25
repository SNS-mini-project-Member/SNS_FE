import {apiClient} from "./ApiClient";

export const boardIdGet = () => apiClient.get('/api/v1/board/1')

