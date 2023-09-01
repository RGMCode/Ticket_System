import {Col, Form, Modal} from "react-bootstrap";
import {TicketData, UserData} from "../../Pages/TicketOverview/TicketOverview.tsx";
import Row from 'react-bootstrap/Row';


type ModalTicketDetails = {
    onHide: () => void;
    show: boolean;
    ticketDetails: TicketData;
    userDetails: UserData;
}

export default function ModalShowTicket(props: ModalTicketDetails) {
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
                        <h1>Ticket Details</h1>
                        <h2>{props.ticketDetails.id}</h2>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Row>
                                <Col>
                                    <Form.Label column sm="2">
                                        Titel:
                                    </Form.Label>
                                    <input type="text" value={props.userDetails.userTitle} readOnly/>
                                </Col>
                                <Col>
                                    <Form.Label column sm="2">
                                        Anrede:
                                    </Form.Label>
                                    <input type="text" value={props.userDetails.userSalutation} readOnly/>
                                </Col>
                            </Row>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Row>
                                <Col>
                                    <Form.Label column sm="2">
                                        Nachname:
                                    </Form.Label>
                                    <input type="text" value={props.userDetails.userLastName} readOnly/>
                                </Col>
                                <Col>
                                    <Form.Label column sm="2">
                                        Vorname:
                                    </Form.Label>
                                    <input type="text" value={props.userDetails.userFirstName} readOnly/>
                                </Col>
                            </Row>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Row>
                                <Col>
                                    <Form.Label column sm="2">
                                        Standort:
                                    </Form.Label>
                                    <input type="text" value={props.userDetails.userLocation} readOnly/>
                                </Col>
                                <Col>
                                    <Form.Label column sm="2">
                                        Gebäude:
                                    </Form.Label>
                                    <input type="text" value={props.userDetails.userBuilding} readOnly/>
                                </Col>
                            </Row>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Row>
                                <Col>
                                    <Form.Label column sm="2">
                                        Abteilung:
                                    </Form.Label>
                                    <input type="text" value={props.userDetails.userDepartment} readOnly/>
                                </Col>
                                <Col>
                                    <Form.Label column sm="2">
                                        Raum:
                                    </Form.Label>
                                    <input type="text" value={props.userDetails.userRoom} readOnly/>
                                </Col>
                            </Row>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Row>
                                <Col>
                                    <Form.Label column sm="2">
                                        Telefon:
                                    </Form.Label>
                                    <input type="text" value={props.userDetails.userPhoneNumber} readOnly/>
                                </Col>
                                <Col>
                                    <Form.Label column sm="2">
                                        E-Mail:
                                    </Form.Label>
                                    <input type="text" value={props.userDetails.userEMail} readOnly/>
                                </Col>
                            </Row>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Row>
                                <Form.Label column sm="2">
                                    Überschrift:
                                </Form.Label>
                                <input type="text" value={props.ticketDetails.customerHeadline} readOnly/>
                            </Row>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Row>
                                <Form.Label column sm="3">
                                    detaillierte Beschreibung:
                                </Form.Label>
                                <textarea
                                       value={props.ticketDetails.customerDescription}
                                       readOnly
                                              />
                            </Row>
                        </Form.Group>


                        {/*<FormLabel>bearbeiter:</FormLabel>*/}
                        {/*<FormLabel>{props.ticketDetails.processingEmployeeLastName}, {props.ticketDetails.processingEmployeeFirstName}</FormLabel>*/}

                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );

}