import Carousels from "../../components/Carousels/Carousels.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import ModalLogin from "../../components/ModalLogin/ModalLogin.tsx";
import ModalRegistration from '../../components/ModalRigistration/ModalRegistration.tsx'
import logo from "../../pictures/MRG_Code_Logo.png";
import './Homepage.css'

export default function Homepage() {
    const [loginModal, setLoginModal] = useState(false);
    const [registrationModal, setRegistrationModal] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className={"navbar-Homepage"}>
                <div className="logo-container-Homepage">
                    <img src={logo} alt="Logo" className="navbar-logo-Homepage"/>
                    <button className="menu-toggle-Homepage" onClick={() => setIsOpen(!isOpen)}>
                        ☰
                    </button>
                </div>
                <div className={`menu-Homepage ${isOpen ? 'open-Homepage' : ''}`}>
                    <button className={"btnGlowNav-Homepage"} style={{marginLeft: '10px', width: '120px'}}
                            onClick={() => setLoginModal(true)}>
                        login
                    </button>
                    <button className={"btnGlowNav-Homepage"} style={{marginLeft: '10px', width: '120px'}}
                            onClick={() => setRegistrationModal(true)}>
                        registrieren
                    </button>
                </div>
            </div>
            <Carousels/>
            <div>
                <div>
                    <ModalLogin onHide={() => setLoginModal(false)} show={loginModal}/>
                </div>
                <div>
                    <ModalRegistration onHide={() => setRegistrationModal(false)} show={registrationModal}/>
                </div>
            </div>

            {/*<div className="parallax"></div>*/}

            <div className={"breakParalaxx"}>
                <div className={"break"}>
                    <div className={"break-item"}>
                        <h1>Lorem ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                            sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className={"break-item"}>
                        <h1>Lorem ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                            sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className={"break-item"}>
                        <h1>Lorem ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                            sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>

            <div className="parallax"></div>

            <footer>
                <div>
                    <div>1234567890</div>
                    <div>2345678901</div>
                    <div>3456789012</div>
                </div>
            </footer>

        </div>
    );
}
