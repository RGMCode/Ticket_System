import Navigationbar from "../../components/Navigationbar/Navigationbar.tsx";
import {Button, Table} from "react-bootstrap";
import {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import ModalCreateTicket from "../../components/ModalCeateTicket/ModalCreateTicket.tsx";
import ModalShowTicket from "../../components/ModalShowTicket/ModalShowTicket.tsx";

export type TicketData = {
    "id": string,
    "ticketUUID": string,
    "ticketDate": string,
    "ticketTime": string,
    "userID": string,
    "room": string,
    "unitID": string,
    "customerHeadline": string,
    "customerDescription": string,
    "ticketStatus": string,
    "processingEmployeeLastName": string,
    "processingEmployeeFirstName": string,
    "publicComment": string,
    "internalComment": string,
    "employeeHistoryLastName": string,
    "employeeHistoryFirstName": string,
    "contributingEmployeesLastName": string,
    "contributingEmployeesFirstName": string,
    "escalationStatus": string,
    "solutionAnswer": string
}

export type UserData = {
    "id": string,
    "userUUID": string,
    "userRegistrationDate": string,
    "userRegistrationTime": string,
    "userTitle": string,
    "userSalutation": string,
    "userLastName": string,
    "userFirstName": string,
    "userDepartment": string,
    "userLocation": string,
    "userBuilding": string,
    "userRoom": string,
    "userPhoneNumber": string,
    "userEMail": string,
    "userLoginName": string,
    "userPassword": string,
    "userRole": string
}

type TicketUserDataProps = {
    ticket: TicketData
    user: UserData
};


export default function TicketOverview() {

    const [tickets, setTickets] = useState<TicketData[]>([]);
    const [users, setUsers] = useState<UserData[]>()
    const [currentPage, setCurrentPage] = useState(1);
    const [ticketsPerPage, setTicketsPerPage] = useState(20);

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:5173/api/ticket"
        }).then(function (response) {
            const sortedTickets = response.data.sort((a: TicketData, b: TicketData) => {
                // Vergleiche die Ticket-IDs in absteigender Reihenfolge
                return parseInt(b.id) - parseInt(a.id);
            });
            setTickets(sortedTickets);
        });
    }, []);

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:5173/api/user"
        }).then(function (response) {
            setUsers(response.data)
        })
    }, []);

    const indexOfLastTicket = currentPage * ticketsPerPage;
    const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
    const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket);

    const handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setCurrentPage(1);
        if (event.target.value === "all") {
            setTicketsPerPage(tickets.length);
        } else {
            setTicketsPerPage(Number(event.target.value));
        }
    };

    const nextPage = () => {
        setCurrentPage(prev => prev + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    function TicketTableRow(props: TicketUserDataProps) {
        const [showTicketDetails, setShowTicketDetails] = useState(false)
        return (
            <tr>
                <td>{props.ticket.id}</td>
                <td>{props.ticket.ticketDate} | {props.ticket.ticketTime} Uhr</td>
                <td>{props.ticket.customerHeadline}</td>
                <td>{props.user.userDepartment}</td>
                <td>{props.user.userSalutation}</td>
                <td>{props.user.userLastName}</td>
                <td>{props.user.userFirstName}</td>
                {/*<td>{props.ticket.processingEmployeeLastName}, {props.ticket.processingEmployeeFirstName}</td>*/}
                <td>
                    <Button variant="outline-primary" onClick={() => setShowTicketDetails(true)}>Show</Button>
                    <ModalShowTicket
                        onHide={() => setShowTicketDetails(false)}
                        show={showTicketDetails}
                        ticketDetails={props.ticket}
                        userDetails={props.user}
                    />
                </td>
            </tr>
        );
    }

    const [createTicketModal, setCreateTicketModal] = useState(false)

    return (
        <div>
            <Navigationbar/>
            <h1>TicketOverview</h1>
            <div>
                <Button style={{width:'150px', height:'50px'}} variant="success"
                        onClick={() => setCreateTicketModal(true)}>
                    Ticket erstellen
                </Button>
                <ModalCreateTicket onHide={() => setCreateTicketModal(false)} show={createTicketModal} setTickets={setTickets}/>
            </div>
            <div>
                <Table striped bordered hover variant="light">
                    <thead>
                    <tr>
                        <th>Ticket-ID</th>
                        <th>Datum & Uhrzeit</th>
                        <th>Problem</th>
                        <th>Abteilung</th>
                        <th>Anrede</th>
                        <th>Last Name</th>
                        <th>First Name</th>
                        {/*<th>Bearbeiter</th>*/}
                        <th>Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentTickets.length === 0
                        ? <tr>
                            <td>Loading...</td>
                        </tr>
                        : currentTickets.map(newTicket => {
                            const correspondingUser = users?.find(user => user.id === newTicket.userID);
                            if (correspondingUser) {
                                return <TicketTableRow key={newTicket.id} ticket={newTicket} user={correspondingUser}/>;
                            }
                            return null;
                        })
                    }
                    </tbody>
                </Table>
                <div className="flex-container">
                    <div className={"ticket-footer"}>
                        <div className="pagination">
                            {currentPage > 1 && <button onClick={prevPage}>Vorherige</button>}
                            <span>Seite {currentPage} | Zeigt Tickets {indexOfFirstTicket + 1} - {Math.min(indexOfLastTicket, tickets.length)} von {tickets.length}</span>
                            {currentTickets.length === ticketsPerPage && <button onClick={nextPage}>Nächste</button>}
                        </div>
                        <div>
                            <label>Anzeigen: </label>
                            <select onChange={handleDropdownChange}>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                <option value="all">Alle</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}