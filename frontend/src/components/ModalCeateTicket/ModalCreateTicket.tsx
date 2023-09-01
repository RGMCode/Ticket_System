import {Button, Form, FormLabel, Modal} from "react-bootstrap";
import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {TicketData} from "../../Pages/TicketOverview/TicketOverview.tsx"

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

    function createNewTicket(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        axios.post("/api/ticket", {userTitel, userSalutation, userLastName, userFirstName,
                                            userDepartment, userLocation, userBuilding, userRoom,
                                            userPhoneNumber, userEMail})
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
                        <h1>Registrierung</h1>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={createNewTicket}>
                        <FormLabel>Titel:</FormLabel>
                        <input type={"text"} id={"userTitel"} onChange={onChangeHandlerUserTitel}/>
                        <FormLabel>Anrede:</FormLabel>
                        <input type={"text"} id={"userSalutation"} required={true} onChange={onChangeHandlerUserSalutation}/>
                        <br/>
                        <FormLabel>Nachname:</FormLabel>
                        <input type={"text"} id={"userLastName"} required={true} onChange={onChangeHandlerUserLastName}/>
                        <FormLabel>Vorname:</FormLabel>
                        <input type={"text"} id={"userFirstName"} required={true} onChange={onChangeHandlerUserFirstName}/>
                        <br/>
                        <FormLabel>Abteilung:</FormLabel>
                        <input type={"text"} id={"userDepartment"} required={true} onChange={onChangeHandlerUserDepartment}/>
                        <FormLabel>Standort:</FormLabel>
                        <input type={"text"} id={"userLocation"} onChange={onChangeHandlerUserLocation}/>
                        <br/>
                        <FormLabel>Gebäude:</FormLabel>
                        <input type={"text"} id={"userBuilding"} required={true} onChange={onChangeHandlerUserBuilding}/>
                        <FormLabel>Raum:</FormLabel>
                        <input type={"text"} id={"userRoom"} required={true} onChange={onChangeHandlerUserRoom}/>
                        <br/>
                        <FormLabel>Telefonnummer:</FormLabel>
                        <input type={"text"} id={"userPhoneNumber"} required={true} onChange={onChangeHandlerUserPhoneNumber}/>
                        <FormLabel>E-Mail:</FormLabel>
                        <input type={"text"} id={"userEMail"} required={true} onChange={onChangeHandlerUserEMail}/>
                        <br/>
                        <FormLabel>Ticket Überschrift:</FormLabel>
                        <input type={"text"} id={"userHeadlineField"} required={true}/>
                        <br/>
                        <FormLabel>detaillierte Beschreibung</FormLabel> <br/>
                        <Form.Control as="textarea" style={{ minHeight: '250px', maxHeight:'500px' }} id={"userDetailDiscription"} required={true} />
                        <br/>
                        <br/>
                        <Button variant={"success"}>Ticket erstellen</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );

}