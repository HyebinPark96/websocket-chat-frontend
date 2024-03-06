import React from "react";
import { Link } from "react-router-dom";
import useStore from "../../zustand/store";

const LobbyPage = () => {
    const { setName } = useStore((state) => state);

    return (
        <div>
            <h3>사용자명을 입력하세요.</h3>
            <input
                type="text"
                placeholder="사용자명 입력 (10자 이내)"
                onChange={(e) => {setName(e.target.value)}}
            />
            <Link to="/chat/list">
                <label>START</label>
            </Link>
        </div>
    );
};

export default LobbyPage;
