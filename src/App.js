import "./App.css";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './main';
import NotFound from './error/notFound';
import LobbyPage from './chat/lobby/lobbyPage';
import AdminPage from './admin/adminPage';
import List from "./chat/list";
import Insert from "./chat/insert";

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
        </div>
    );
}

export default App;
