import React, { useEffect, useState } from "react";
import MainLayout from "../Layout/MainLayout";
import Header from "../Layout/Header";
import {
    apiGetresult,
    apiDeleteFollow,
    apiAddFollow,
    apiSearchFollow,
    apiGetFollowresult
} from "../../../common/api/ApiGetService"; // apiAddFollow 추가
import "../../../styles/blocks/table.css";
import "../../../styles/blocks/modal.css"
import {useSelector} from "react-redux";

const FollowTable = () => {
    const [follow, setFollowData] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedFollowId, setSelectedFollowId] = useState(null);
    const [showAddFollowModal, setShowAddFollowModal] = useState(false); // 팔로우 추가 모달 표시 여부 상태 추가
    const [newFollowName, setNewFollowName] = useState(""); // 입력된 새 팔로우 이름 상태 추가
    const isLogin = useSelector(state => state.loginCheck.loginInfo);

    useEffect(() => {
        apiGetFollowresult()
            .then((res) => {
                setFollowData(res.data.content);
                console.log(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    const handDeleteFollow = (followId) => {
        setSelectedFollowId(followId);
        apiDeleteFollow(followId)
            .then((res) => {
                setShowPopup(true);
                console.log("팔로우 취소 성공:", res);
            })
            .catch((err) => {
                setShowPopup(false);
                setSelectedFollowId(null);
                console.log("팔로우 성공:", err);
            });
    };

    const openAddFollowModal = () => {
        setShowAddFollowModal(true);
    };

    const confirmAddFollow = () => {
        debugger
        // 팔로우 검색 메소드 호출
        apiSearchFollow(newFollowName) //
            .then((searchResult) => {
                if (searchResult.length === 0) {
                    console.log("유저를 찾을 수 없습니다.");
                    return;
                }
                debugger

                const followUserId= searchResult.data.userId;
                const loggedInUserId = isLogin.userSeq; // 현재 로그인한 유저의 userId

                const followerRequest = {
                    loggedInUserId,
                    followUserId
                }

                const followingRequest = {
                    followUserId,
                    loggedInUserId
                }

                // 친구 추가
                apiAddFollow(followingRequest, followerRequest)
                    //apiAddFollow(followShipRequest(loggedInUserId,followUserId), null, followReqRequest(followUserId,loggedInUserId))
                    .then((res) => {
                        console.log("팔로우 성공:", res);
                        setShowAddFollowModal(false); // 모달 닫기
                        setNewFollowName(""); // 입력된 팔로우 이름 초기화

                        // 친구 추가 성공 후 친구 목록 갱신
                        apiGetresult()
                            .then((res) => {
                                setFollowData(res.data.content);
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    })
                    .catch((err) => {
                        console.log("팔로우 추가 실패:", err);
                    });
            })
            .catch((err) => {
                console.log("팔로우 검색 실패:", err);
            });
    };


    const closeAddFollowModal = () => {
        setShowAddFollowModal(false);
        setNewFollowName("");
    };

    return (
        <>
            <Header />
            <MainLayout>
                <div className="table-container">
                    <h1 className="table-title">팔로우 목록</h1>
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
                        {follow.map((item) => (
                            <tr key={item.userSeq}>
                                <td>{item.userName}</td>
                                <td>{item.userEmail}</td>
                                <td>{item.userAge}</td>
                                <td>{item.userPhone}</td>
                                <td>{item.followingCount}</td>
                                <td>
                                    <button onClick={() => handDeleteFollow(item.userId)}
                                            disabled={selectedFollowId === item.userId}>
                                        {selectedFollowId === item.userId
                                            ? "삭제 중"
                                            : "팔로우 취소"}</button>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan="6">
                                <button onClick={openAddFollowModal}>팔로우 추가</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </MainLayout>
            {/* 팔로우 추가 모달 */}
            {showAddFollowModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-content">
                            <h2>새 팔로우 추가</h2>
                            <input
                                type="text"
                                placeholder="팔로우 입력"
                                value={newFollowName}
                                onChange={(e) => setNewFollowName(e.target.value)}
                            />
                            <button onClick={confirmAddFollow}>확인</button>
                            <button onClick={closeAddFollowModal}>취소</button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default FollowTable;
