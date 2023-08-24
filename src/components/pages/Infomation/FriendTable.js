import React, {useEffect, useState} from "react";
import MainLayout from "../Layout/MainLayout";
import Header from "../Layout/Header";
import {apiGetresult} from "../../../common/api/ApiGetService";
import "../../../styles/blocks/friendTable.css"

const FriendTable = () => {
    const [friendData, setFriendData] = useState([]);

    useEffect(() => {
        apiGetresult()
            .then((res) => {
                setFriendData(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <Header />
            <MainLayout>
                <div className="table-container">
                    <h1 className="table-title">친구 목록</h1>
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                        </thead>
                        <tbody>
                        {friendData.map((content) => (
                            <tr key={content.}>
                                <td>{content.}</td>
                                <td>{content.userName}</td>
                                <td>{content.userId}</td>
                                <td>{content.userEmail}</td>
                                <td>{content.userAge}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </MainLayout>
        </>
    );
};

export default FriendTable;
