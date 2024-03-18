import React, { useEffect, useState } from "react";
import useStore from "../zustand/store";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
    const { name } = useStore((state) => state);

    const [roomList, setRoomList] = useState({});

    const getRoomList = () => {
        axios
            .get("/roomList")
            .then((result) => {
                const data = result.data;
                if (data) {
                    setRoomList(data);
                } else {
                    toast.warn("채팅방 목록을 불러오는 데 실패하였습니다.");
                }
            })
            .catch((err) => {
                console.log("채팅방 목록을 불러오는 데 실패하였습니다.");
                toast.warn("채팅방 목록을 불러오는 데 실패하였습니다.");
            });
    };

    useEffect(() => {
        getRoomList();
    }, []);

    return (
        <div>
            <label>{name}님 환영합니다!</label>
            <div>
                <p>채팅방 목록</p>
                {roomList ? (
                    Object.entries(roomList).map(([key, value]) => (
                        <div key={key}>
                            {key} / 인원: {value.headcount}
                        </div>
                    ))
                ) : (
                    <></>
                )}
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
