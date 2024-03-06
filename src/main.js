import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <div>
                <Link to="/chat/lobby">
                    <label>사용자로 시작하기</label>
                </Link>
            </div>

            <div>
                <Link to="/admin">
                    <label>관리자로 시작하기</label>
                </Link>
            </div>
        </div>
    );
};

export default Main;
