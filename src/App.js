import "./App.css";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main";
import NotFound from "./error/notFound";
import LobbyPage from "./chat/lobby/lobbyPage";
import AdminPage from "./admin/adminPage";
import List from "./chat/list";
import Insert from "./chat/insert";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/chat/lobby" element={<LobbyPage />}></Route>
                    <Route path="/chat/list" element={<List />}></Route>
                    <Route path="/chat/insert" element={<Insert />}></Route>
                    <Route path="/admin" element={<AdminPage />}></Route>
                    {/* <Route path="/chatRoom/insert" element={<Insert />}></Route> */}
                    {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
            <ToastContainer
                position="top-right" // 알람 위치 지정
                autoClose={3000} // 자동 off 시간
                hideProgressBar={false} // 진행시간바 숨김
                closeOnClick // 클릭으로 알람 닫기
                rtl={false} // 알림 좌우 반전
                pauseOnFocusLoss // 화면을 벗어나면 알람 정지
                draggable // 드래그 가능
                pauseOnHover // 마우스를 올리면 알람 정지
                theme="light"
                // limit={1} // 알람 개수 제한
            />
        </div>
    );
}

export default App;
