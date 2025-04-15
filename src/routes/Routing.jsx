import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "../pages/homepage";
import Layout from '../layout/Layout';
import ErrorPage from "../pages/error";
import GenrePage from "../pages/genrepage/index.jsx";
import GamePage from "../pages/gamepage/index.jsx";
import SearchPage from "../pages/searchpage/index.jsx";
import RegisterPage from "../pages/register/index.jsx";
import LoginPage from "../pages/login/index.jsx";
import AccountPage from "../pages/account/index.jsx";
import ProfilePage from "../pages/profile/index.jsx";
export function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="/games/:genre" element={<GenrePage />} />
                    <Route path="/games/:slug/:id" element={<GamePage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/account" element={<AccountPage />}/>
                    <Route path="/profile" element={<ProfilePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}