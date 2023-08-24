import React, { useEffect, useState } from "react";
import MainLayout from "../Layout/MainLayout";
import Header from "../Layout/Header";
import {apiGetresult, apiDeleteFriend, apiAddFriend, apiSearchFriend} from "../../../common/api/ApiGetService"; // apiAddFriend 추가
import "../../../styles/blocks/friendTable.css";
import "../../../styles/blocks/modal.css"
import {useSelector} from "react-redux";

const FriendTable = () => {
    const [friendData, setFriendData] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedFriendShipId, setSelectedFriendShipId] = useState(null);
    const [showAddFriendModal, setShowAddFriendModal] = useState(false); // 친구 추가 모달 표시 여부 상태 추가
    const [newFriendName, setNewFriendName] = useState(""); // 입력된 새 친구 이름 상태 추가
    const isLogin = useSelector(state => state.loginCheck.loginInfo);

    useEffect(() => {
        apiGetresult()
            .then((res) => {
                setFriendData(res.data.content);
                console.log(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    const handleDeleteFriend = (friendShipId) => {
        setSelectedFriendShipId(friendShipId);
        apiDeleteFriend(friendShipId)
            .then((res) => {
                setShowPopup(true);
                console.log("친구 삭제 성공:", res);
            })
            .catch((err) => {
                setShowPopup(false);
                setSelectedFriendShipId(null);
                console.log("친구 삭제 실패:", err);
            });
    };

    const openAddFriendModal = () => {
        setShowAddFriendModal(true);
    };

    const confirmAddFriend = () => {
        // 친구 검색 메소드 호출
        apiSearchFriend(newFriendName) // 친구 이름으로 검색
            .then((searchResult) => {
                if (searchResult.length === 0) {
                    console.log("친구를 찾을 수 없습니다.");
                    return;
                }

                const friendUserId = searchResult[0].userId; // 첫 번째 검색 결과의 userId 사용
                const loggedInUserId = isLogin.userSeq; // 현재 로그인한 유저의 userId (변경 필요)

                // 친구 추가
                apiAddFriend(loggedInUserId, friendUserId)
                    .then((res) => {
                        console.log("친구 추가 성공:", res);
                        setShowAddFriendModal(false); // 모달 닫기
                        setNewFriendName(""); // 입력된 친구 이름 초기화

                        // 친구 추가 성공 후 친구 목록 갱신
                        apiGetresult()
                            .then((res) => {
                                setFriendData(res.data.content);
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    })
                    .catch((err) => {
                        console.log("친구 추가 실패:", err);
                    });
            })
            .catch((err) => {
                console.log("친구 검색 실패:", err);
            });
    };


    const closeAddFriendModal = () => {
        setShowAddFriendModal(false);
        setNewFriendName("");
    };

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
                            <th>Email</th>
                            <th>Age</th>
                            <th>phNum</th>
                            <th>followingCount</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {friendData.map((item) => (
                            <tr key={item.userSeq}>
                                <td>{item.userName}</td>
                                <td>{item.userEmail}</td>
                                <td>{item.userAge}</td>
                                <td>{item.userPhone}</td>
                                <td>{item.followingCount}</td>
                                <td>
                                    <button onClick={() => handleDeleteFriend(item.userId)}
                                            disabled={selectedFriendShipId === item.userId}>
                                        {selectedFriendShipId === item.userId
                                            ? "삭제 중"
                                            : "친구 취소"}</button>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan="6">
                                <button onClick={openAddFriendModal}>친구 추가</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </MainLayout>
            {/* 친구 추가 모달 */}
            {showAddFriendModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-content">
                            <h2>새 친구 추가</h2>
                            <input
                                type="text"
                                placeholder="친구 이름 입력"
                                value={newFriendName}
                                onChange={(e) => setNewFriendName(e.target.value)}
                            />
                            <button onClick={confirmAddFriend}>확인</button>
                            <button onClick={closeAddFriendModal}>취소</button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default FriendTable;

