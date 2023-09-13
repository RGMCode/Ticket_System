import Carousels from "../../components/Carousels/Carousels.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardGroup} from "react-bootstrap";
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
            <div>
                <CardGroup>
                    <Card border="info" style={{margin: '5px', width: '15rem'}}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Info Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card bg={'info'} style={{margin: '5px', width: '18rem'}} className="mb-2">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title> Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border={"warning"} style={{margin: '5px', width: '18rem'}} className="mb-2">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title> Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card bg={'warning'} style={{margin: '5px', width: '18rem'}} className="mb-2">
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title> Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </div>
    );
}
