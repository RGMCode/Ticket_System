import {Button, Col, Form, Modal} from "react-bootstrap";
import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {TicketData} from "../../Pages/TicketOverview/TicketOverview.tsx"
import Row from "react-bootstrap/Row";

type ModalCreate = {
    onHide: () => void;
    show: boolean;
    setTickets: (newTicket: TicketData[]) => void;
}

export default function ModalCreateTicket(props: ModalCreate) {

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

    const [ticketCustomerHeadline, setTicketCustomerHeadline] = useState("")
    const [ticketCustomerDescription, setTicketCustomerDescription] = useState("")

    const nav = useNavigate();

    function onChangeHandlerUserTitel(event: ChangeEvent<HTMLInputElement>){
        setUserTitel(event.target.value)
    }

    function onChangeHandlerUserSalutation(event: ChangeEvent<HTMLInputElement>){
        setUserSalutation(event.target.value)
    }

    function onChangeHandlerUserLastName(event: ChangeEvent<HTMLInputElement>){
        setUserLastName(event.target.value)
    }

    function onChangeHandlerUserFirstName(event: ChangeEvent<HTMLInputElement>){
        setUserFirstName(event.target.value)
    }

    function onChangeHandlerUserDepartment(event: ChangeEvent<HTMLInputElement>){
        setUserDepartment(event.target.value)
    }

    function onChangeHandlerUserLocation(event: ChangeEvent<HTMLInputElement>){
        setUserLocation(event.target.value)
    }

    function onChangeHandlerUserBuilding(event: ChangeEvent<HTMLInputElement>){
        setUserBuilding(event.target.value)
    }

    function onChangeHandlerUserRoom(event: ChangeEvent<HTMLInputElement>){
        setUserRoom(event.target.value)
    }

    function onChangeHandlerUserPhoneNumber(event: ChangeEvent<HTMLInputElement>){
        setUserPhoneNumber(event.target.value)
    }

    function onChangeHandlerUserEMail(event: ChangeEvent<HTMLInputElement>){
        setUserEMail(event.target.value)
    }

    function onChangeHandlerTicketCustomerHeadline(event: ChangeEvent<HTMLInputElement>){
        setTicketCustomerHeadline(event.target.value)
    }

    function onChangeHandlerTicketCustomerDescription(event: ChangeEvent<HTMLTextAreaElement>){
        setTicketCustomerDescription(event.target.value)
    }

    function createNewTicket(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        axios.post("/api/ticket", {userTitel, userSalutation, userLastName, userFirstName,
                                            userDepartment, userLocation, userBuilding, userRoom,
                                            userPhoneNumber, userEMail, ticketCustomerHeadline,
                                            ticketCustomerDescription})
            .then()
            .then(() => {
                axios.get('/ticketoverview')
                     .then((response) => props.setTickets(response.data))
                nav("/ticketoverview")
            })
            .catch((error) => console.log(error));
    }

    return(
        <div>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h1>Ticket erstellen</h1>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={createNewTicket}>
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
                                    <input type={"text"} id={"userSalutation"} required={true} onChange={onChangeHandlerUserSalutation}/>
                                </Col>
                            </Row>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Row>
                                <Col>
                                    <Form.Label column sm="2">
                                        Nachname:
                                    </Form.Label>
                                    <input type="text" id={"userLastName"} required={true} onChange={onChangeHandlerUserLastName}/>
                                </Col>
                                <Col>
                                    <Form.Label column sm="2">
                                        Vorname:
                                    </Form.Label>
                                    <input type="text" id={"userFirstName"} required={true} onChange={onChangeHandlerUserFirstName}/>
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
                                    <input type="text" id={"userBuilding"} required={true} onChange={onChangeHandlerUserBuilding}/>
                                </Col>
                            </Row>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Row>
                                <Col>
                                    <Form.Label column sm="2">
                                        Abteilung:
                                    </Form.Label>
                                    <input type="text" id={"userDepartment"} required={true} onChange={onChangeHandlerUserDepartment}/>
                                </Col>
                                <Col>
                                    <Form.Label column sm="2">
                                        Raum:
                                    </Form.Label>
                                    <input type="text" id={"userRoom"} required={true} onChange={onChangeHandlerUserRoom}/>
                                </Col>
                            </Row>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Row>
                                <Col>
                                    <Form.Label column sm="2">
                                        Telefon:
                                    </Form.Label>
                                    <input type="text" id={"userPhoneNumber"} required={true} onChange={onChangeHandlerUserPhoneNumber}/>
                                </Col>
                                <Col>
                                    <Form.Label column sm="2">
                                        E-Mail:
                                    </Form.Label>
                                    <input type="text" id={"userEMail"} required={true} onChange={onChangeHandlerUserEMail}/>
                                </Col>
                            </Row>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Row>
                                <Form.Label column sm="2">
                                    Überschrift:
                                </Form.Label>
                                <input type="text" id={"userHeadlineField"} required={true} onChange={onChangeHandlerTicketCustomerHeadline}/>
                            </Row>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Row>
                                <Form.Label column sm="3">
                                    detaillierte Beschreibung:
                                </Form.Label>
                                <textarea id={"userDetailDiscription"} required={true} onChange={onChangeHandlerTicketCustomerDescription}/>
                            </Row>
                        </Form.Group>

                        <Button type={"submit"} variant={"success"} onClick={props.onHide}>Ticket erstellen</Button>
                        <Button  variant={"warning"} onClick={props.onHide}>Close Modal</Button>

                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );

}