import Carousels from "../../components/Carousels/Carousels.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import {useState} from "react";
import ModalLogin from "../../components/ModalLogin/ModalLogin.tsx";
import ModalRegistration from '../../components/ModalRigistration/ModalRegistration.tsx'
// import Navigationbar from "../../components/Navigationbar/Navigationbar.tsx";

export default function Homepage() {

    const [loginModal, setLoginModal] = useState(false);
    const [registrationModal, setRegistrationModal] = useState(false)

    const [user, setUser] = useState("")


    return (
        <div>
            <div>
                {/*<Navigationbar/>*/}
                <Carousels/>
                <div>
                    <div>
                        <Button style={{marginTop: '25px', width:'120px'}} variant="outline-info"
                            onClick={() => setLoginModal(true)}>
                            login
                        </Button>
                        <ModalLogin onHide={() => setLoginModal(false)} show={loginModal} setUser={setUser}/>
                    </div>
                    <div>
                        <Button style={{marginTop: '25px', width:'120px'}} variant="outline-info"
                                onClick={() => setRegistrationModal(true)}>
                            registrieren
                        </Button>
                        <ModalRegistration onHide={() => setRegistrationModal(false)} show={registrationModal}/>
                    </div>

                </div>
            </div>
        </div>
    );
}