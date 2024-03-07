import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Insert = () => {
    const insertRoom = () => {
        axios.post("/chatRoom", { ...roomInfo }, {
			withCredentials: true // 쿠키 cors 통신 설정
		}).then((result) => {
            console.log(result);
        });
    };

    const [roomInfo, setRoomInfo] = useState({
        roomName: "",
        headcount: 0,
    });

    const changeHeadcount = (value) => {
        if (value === "plus") {
            setRoomInfo({ ...roomInfo, headcount: roomInfo.headcount + 1 });
        } else {
            if (roomInfo.headcount === 0) {
                toast.warn("채팅방 인원은 최소 1명 이상이어야 합니다.");
                return;
            }
            setRoomInfo({ ...roomInfo, headcount: roomInfo.headcount - 1 });
        }
    };

    return (
        <div>
            <p>채팅방이름</p>
            <input
                type="text"
                value={roomInfo.roomName}
                onChange={(e) =>
                    setRoomInfo({ ...roomInfo, roomName: e.target.value })
                }
            />

            <p>정원</p>
            <button
                value="plus"
                onClick={(e) => changeHeadcount(e.target.value)}
            >
                +1
            </button>
            <input
                type="text"
                value={roomInfo.headcount}
                // onKeyup="this.value=this.value.replace(/[^-0-9]/g,'')"
            />
            <button
                value="minus"
                onClick={(e) => changeHeadcount(e.target.value)}
            >
                -1
            </button>
            <p>
                <button onClick={insertRoom}>채팅방 생성</button>
            </p>
        </div>
    );
};

export default Insert;
