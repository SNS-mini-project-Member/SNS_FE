import {apiClient} from "./ApiClient";
import axios from "axios";

export const apiGetService = async (url, method, data) => {
    const token = localStorage.getItem('token')
    const body = await axios({
        url, method, data, headers: { "Authorization": `Bearer ${token}` }
    })
    return body.data
}

export const apiGetresult = () => apiClient.get('/api/v1/friend/friendShip')
