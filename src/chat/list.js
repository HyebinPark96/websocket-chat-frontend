import React, { useEffect, useState } from "react";
import useStore from "../zustand/store";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
    const { name } = useStore((state) => state);

    const [roomList, setRoomList] = useState([]);

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

    const enterRoom = (roomId, name) => {
        axios.post(`/chatRoom/connUser`, {
            roomId: roomId,
            tempUser: name
        })
        .then((result) => {
            if(result.data) {

            }
        }).catch((err) => {
            console.log(err);
            toast.warn("채팅방 입장에 실패하였습니다.");
        })
    }

    return (
        <div>
            <label>{name}님 환영합니다!</label>
            <div>
                <p>채팅방 목록</p>
                {roomList.length > 0 ? (
                    roomList.map((room) => (
                        <div>
                            {room.roomName} ({room.connUserList ? room.connUserList.length : 0}/{room.headcount})
                            <input type="button" value="입장하기" onClick={() => enterRoom(room.roomId, name)} />
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
