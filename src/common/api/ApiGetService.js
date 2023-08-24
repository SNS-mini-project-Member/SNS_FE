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

export const apiDeleteFriend = (friendShipId) => apiClient.delete(`api/v1/friend/deleteFriend/${friendShipId}`)

export const apiAddFriend = (friendShipRequest, friendRecommendRequest, friendReqRequest) => apiClient.post('api/v1/friend/addFriends', {
    friendShipRequest : {
        friendShipId : friendShipRequest.loggedInUserId,
        userId : friendShipRequest.friendUserId
    },
    friendRecommendRequest,
    friendReqRequest : {
        friendReqId : friendReqRequest.friendUserId,
        userId : friendReqRequest.loggedInUserId
    }
});

export const apiSearchFriend = (friendName) => apiClient.get(`api/v1/friend/friendByName/${friendName}`)