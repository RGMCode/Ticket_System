import './App.css'
import {Route, Routes} from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.tsx";
import Home from "./Pages/Home/Home.tsx";
import News from "./Pages/News/News.tsx";
import TicketOverview from "./Pages/TicketOverview/TicketOverview.tsx";

function App() {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Homepage/>}/>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/news'} element={<News/>}/>
                <Route path={'/ticketoverview'} element={<TicketOverview/>}/>
            </Routes>
        </>
    );
}

export default App
