import React from "react";
import useStore from "../zustand/store";
import { Link } from "react-router-dom";

const List = () => {
    const { name } = useStore((state) => state);

    return (
        <div>
            <label>{name}님 환영합니다!</label>
            <div>
                <p>채팅방 목록</p>
                <table></table>
            </div>
            <div>
                <Link to="/chat/insert">
                    <button>채팅방 생성</button>
                </Link>
            </div>
        </div>
    );
};

export default List;
