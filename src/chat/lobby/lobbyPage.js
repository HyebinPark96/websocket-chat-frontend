import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../../zustand/store";
import axios from "axios";
import { toast } from "react-toastify";

const LobbyPage = () => {
    const { name, setName } = useStore((state) => state);
    const [flag, setFlag] = useState(false);
    const checkDuplicateName = () => {
        axios
            .get(`/users/check-username/${name}`)
            .then((result) => {
                const data = result.data.data;
                if (data) {
                    toast.info("사용 가능한 사용자명입니다.");
                    setFlag(true);
                } else {
                    toast.warn("중복으로 인해 사용 불가능한 사용자명입니다.");
                    setFlag(false);
                }
            })
            .catch((err) => {
                console.log(err);
                toast.warn("오류가 발생했습니다.");
                setFlag(false);
            });
    };

    return (
        <div>
            <h3>사용자명을 입력하세요.</h3>
            <input
                type="text"
                value={name}
                placeholder="사용자명 입력 (10자 이내)"
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <input
                type="button"
                onClick={checkDuplicateName}
                value={"중복조회"}
            />
            {flag ? (
                <Link to="/chat/list">
                    <input
                        type="button"
                        value={"START"}
                    />
                </Link>
            ) : (
                <span>START</span>
            )}
        </div>
    );
};

export default LobbyPage;
