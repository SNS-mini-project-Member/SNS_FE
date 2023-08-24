// FriendApi.js

import React, { useState, useEffect } from "react";
import { apiGetService } from "../../common/api/ApiGetService";

const FriendApi = () => {
    const [friendData, setFriendData] = useState([]);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);

    const fetchFriendData = async () => {
        try {
            const response = await apiGetService(
                `/api/v1/friend/friendShip?page=${page}&size=${size}`,
                "GET"
            );
            setFriendData(response);
            console.log(friendData)
        } catch (error) {
            console.error("Error fetching friend data:", error);
        }
    };

    useEffect(() => {
        fetchFriendData();
    }, [page, size]);

    return (
        <div>
            <ul>
                {friendData.map((friend) => (
                    <li key={friend.id}>{friend.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default FriendApi;

