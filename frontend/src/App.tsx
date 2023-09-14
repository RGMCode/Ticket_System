
import { UserProvider } from './UserContext';
import {Route, Routes} from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Home from "./Pages/Home/Home";
import ProtectedRoute from "./Pages/ProtectedRoutes/ProtectedRoute.tsx";
import TicketOverview from "./Pages/TicketOverview/TicketOverview";
import './App.css'

function App() {
    return (
        <UserProvider>
            <Routes>
                <Route path={'/'} element={<Homepage />} />
                    <Route element={<ProtectedRoute />}>
                    <Route path={'/home'} element={<Home />} />
                    <Route path={'/ticketoverview'} element={<TicketOverview />} />
                </Route>
            </Routes>
        </UserProvider>
    );
}

export default App;

