import './App.css'
import {Route, Routes} from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.tsx";
import LoginPage from "./Pages/LoginPage/LoginPage.tsx";
import {useState} from "react";
import RegisterPage from "./Pages/RegisterPage/RegisterPage.tsx";

function App() {

    const [user, setUser] = useState("")

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Homepage/>}/>
                <Route path={"/login"} element={<LoginPage setUser={setUser}/>}/>
                <Route path={'/register'} element={<RegisterPage/>}/>
            </Routes>
        </>
    );
}

export default App
