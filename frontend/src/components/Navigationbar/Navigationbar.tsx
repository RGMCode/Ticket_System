
import './Navigationbar.css'
import {Link} from "react-router-dom";
import {useState} from "react";
import logo from "../../pictures/MRG_Code_Logo.png";
import { useUser } from '../../UserContext';


export default function Navigationbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { setUser } = useUser();

    const handleLogout = () => {
        setUser(null);
        setIsOpen(false);
    };

    return (
        <>
            <div className={"navbar"}>
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="navbar-logo"/>
                    <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                        ☰
                    </button>
                </div>
                <div className={`menu ${isOpen ? 'open' : ''}`}>
                    <Link to={"/home"} onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to={"/news"} onClick={() => setIsOpen(false)}>News</Link>
                    <Link to={"/ticketoverview"} onClick={() => setIsOpen(false)}>Tickets</Link>
                    <Link to={"/"} onClick={handleLogout}>Logout</Link>
                </div>
            </div>
        </>
    );
}