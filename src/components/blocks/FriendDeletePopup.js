import React from "react";
import "../../styles/blocks/friendDeletePopup.css";

const FriendDeletePopup = ({ onClose }) => {
    return (
        <div className="popup-container">
            <div className="popup-content">
                <h2>삭제 성공</h2>
                <p>성공적으로 삭제되었습니다.</p>
                <button onClick={onClose}>닫기</button>
            </div>
        </div>
    );
};

export default FriendDeletePopup;