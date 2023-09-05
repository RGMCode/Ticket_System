/*
import './App.css'
import {Route, Routes} from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.tsx";
import Home from "./Pages/Home/Home.tsx";
import News from "./Pages/News/News.tsx";
import TicketOverview from "./Pages/TicketOverview/TicketOverview.tsx";
import ProtectedRoute from "./Pages/ProtectedRoutes/ProtectedRoute.tsx";
import {useState} from "react";
import ModalLogin from "./components/ModalLogin/ModalLogin.tsx";


function App() {

    const [loginModal, setLoginModal] = useState(false);
    const [user, setUser] = useState("")

    console.log(user);

    return (
        <>
            <ModalLogin setUser={setUser} onHide={() => setLoginModal(false)} show={loginModal} />
            <Routes>
                <Route path={"/"} element={<Homepage/>}/>
                <Route element={<ProtectedRoute user={user}/>}>
                    <Route path={'/home'} element={<Home/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/ticketoverview'} element={<TicketOverview/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App
*/

import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.tsx";
import Home from "./Pages/Home/Home.tsx";
import News from "./Pages/News/News.tsx";
import TicketOverview from "./Pages/TicketOverview/TicketOverview.tsx";
import ProtectedRoute from "./Pages/ProtectedRoutes/ProtectedRoute.tsx";
import ModalLogin from "./components/ModalLogin/ModalLogin.tsx";

function App() {
    const [loginModal, setLoginModal] = useState(false);
    const [user, setUser] = useState("");
    const nav = useNavigate(); // Navigationsfunktion holen

    // useEffect, um den Benutzer nach einem erfolgreichen Login zu /home zu navigieren
    useEffect(() => {
        if (user) {
            nav('/home');
        }
    }, [user, nav]);

    console.log(user);

    return (
        <>
            <ModalLogin setUser={setUser} onHide={() => setLoginModal(false)} show={loginModal} />
            <Routes>
                <Route path={"/"} element={<Homepage />}/>
                <Route element={<ProtectedRoute user={user} />}>
                    <Route path={'/home'} element={<Home />}/>
                    <Route path={'/news'} element={<News />}/>
                    <Route path={'/ticketoverview'} element={<TicketOverview />}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
