import {Button, Col, Form, Modal} from "react-bootstrap";
import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Row from "react-bootstrap/Row";

type ModalRegProps = {
    onHide: () => void;
    show: boolean;
}

export default function ModalLogin(props: ModalRegProps) {

    const [userTitel, setUserTitel] = useState("")
    const [userSalutation, setUserSalutation] = useState("")

    const [userLastName, setUserLastName] = useState("")
    const [userFirstName, setUserFirstName] = useState("")

    const [userDepartment, setUserDepartment] = useState("")
    const [userLocation, setUserLocation] = useState("")

    const [userBuilding, setUserBuilding] = useState("")
    const [userRoom, setUserRoom] = useState("")

    const [userPhoneNumber, setUserPhoneNumber] = useState("")
    const [userEMail, setUserEMail] = useState("")

    const [userLoginName, setUserLoginName] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const nav = useNavigate();

    function onChangeHandlerUserTitel(event: ChangeEvent<HTMLInputElement>) {
        setUserTitel(event.target.value)
    }

    function onChangeHandlerUserSalutation(event: ChangeEvent<HTMLInputElement>) {
        setUserSalutation(event.target.value)
    }

    function onChangeHandlerUserLastName(event: ChangeEvent<HTMLInputElement>) {
        setUserLastName(event.target.value)
    }

    function onChangeHandlerUserFirstName(event: ChangeEvent<HTMLInputElement>) {
        setUserFirstName(event.target.value)
    }

    function onChangeHandlerUserDepartment(event: ChangeEvent<HTMLInputElement>) {
        setUserDepartment(event.target.value)
    }

    function onChangeHandlerUserLocation(event: ChangeEvent<HTMLInputElement>) {
        setUserLocation(event.target.value)
    }

    function onChangeHandlerUserBuilding(event: ChangeEvent<HTMLInputElement>) {
        setUserBuilding(event.target.value)
    }

    function onChangeHandlerUserRoom(event: ChangeEvent<HTMLInputElement>) {
        setUserRoom(event.target.value)
    }

    function onChangeHandlerUserPhoneNumber(event: ChangeEvent<HTMLInputElement>) {
        setUserPhoneNumber(event.target.value)
    }

    function onChangeHandlerUserEMail(event: ChangeEvent<HTMLInputElement>) {
        setUserEMail(event.target.value)
    }

    function onChangeHandlerUserLoginName(event: ChangeEvent<HTMLInputElement>) {
        setUserLoginName(event.target.value)
    }

    function onChnageHandlerUserPassword(event: ChangeEvent<HTMLInputElement>) {
        setUserPassword(event.target.value)
    }

    function registration(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post("/api/user/register", {
            userTitel, userSalutation, userLastName,
            userFirstName, userDepartment, userLocation,
            userBuilding, userRoom, userPhoneNumber,
            userEMail, userLoginName, userPassword
        })
            .then(() => nav("/"))
            .catch((error) => console.log(error));
    }

    return (
        <div>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h1>Registrierung</h1>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={registration}>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Row>
                                <Col>
                                    <Form.Label column sm="2">
                                        Titel:
                                    </Form.Label>
                                    <input type={"text"} id={"userTitel"} onChange={onChangeHandlerUserTitel}/>
                                </Col>
                                <Col>
                                    <Form.Label column sm="2">
                                        Anrede:
                                    </Form.Label>
                                    <input type={"text"} id={"userSalutation"} required={true}
                                           onChange={onChangeHandlerUserSalutation}/>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Row>
                                <Col>
                                    <Form.Label column sm="2">
                                        Nachname:
                                    </Form.Label>
                                    <input type="text" id={"userLastName"} required={true}
                                           onChange={onChangeHandlerUserLastName}/>
                                </Col>
                                <Col>
                                    <Form.Label column sm="2">
                                        Vorname:
                                    </Form.Label>
                                    <input type="text" id={"userFirstName"} required={true}
                                           onChange={onChangeHandlerUserFirstName}/>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Row>
                                <Col>
                                    <Form.Label column sm="2">
                                        Standort:
                                    </Form.Label>
                                    <input type="text" id={"userLocation"} onChange={onChangeHandlerUserLocation}/>
                                </Col>
                                <Col>
                                    <Form.Label column sm="2">
                                        Gebäude:
                                    </Form.Label>
                                    <input type="text" id={"userBuilding"} required={true}
                                           onChange={onChangeHandlerUserBuilding}/>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Row>
                                <Col>
                                    <Form.Label column sm="2">
                                        Abteilung:
                                    </Form.Label>
                                    <input type="text" id={"userDepartment"} required={true}
                                           onChange={onChangeHandlerUserDepartment}/>
                                </Col>
                                <Col>
                                    <Form.Label column sm="2">
                                        Raum:
                                    </Form.Label>
                                    <input type="text" id={"userRoom"} required={true}
                                           onChange={onChangeHandlerUserRoom}/>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Row>
                                <Col>
                                    <Form.Label column sm="2">
                                        Telefon:
                                    </Form.Label>
                                    <input type="text" id={"userPhoneNumber"} required={true}
                                           onChange={onChangeHandlerUserPhoneNumber}/>
                                </Col>
                                <Col>
                                    <Form.Label column sm="2">
                                        E-Mail:
                                    </Form.Label>
                                    <input type="text" id={"userEMail"} required={true}
                                           onChange={onChangeHandlerUserEMail}/>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Row>
                                <Col>
                                    <Form.Label column sm="2">
                                        Loginname:
                                    </Form.Label>
                                    <input type="text" id={"userDepartment"} required={true}
                                           onChange={onChangeHandlerUserLoginName}/>
                                </Col>
                                <Col>
                                    <Form.Label column sm="2">
                                        Password:
                                    </Form.Label>
                                    <input type="text" id={"userRoom"} required={true}
                                           onChange={onChnageHandlerUserPassword}/>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Button type={"submit"} variant={"info"} onClick={props.onHide}>regristrieren</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );

}