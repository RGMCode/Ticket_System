import Navigationbar from "../../components/Navigationbar/Navigationbar.tsx";
import Carousels from "../../components/Carousels/Carousels.tsx";
import {Card} from "react-bootstrap";



export default function Home() {

    return(
        <div>
            <Navigationbar/>
            <Carousels/>

            {/*<div style={{minWidth:'1200px', maxWidth: '1200px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>*/}
                {/*<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>*/}
                    <div>
                        <div>
                    <Card className="text-center">
                        <Card.Header><h1>NEWS NEWS NEWS</h1></Card.Header>
                        {/*<Card.Header><h4>Netzwerkausfälle</h4></Card.Header>*/}
                        <Card.Body>
                            <Card.Title>Netzwerkausfälle</Card.Title>
                            <Card.Text>
                                Heute Morgen hatten wir in unserem Unternehmen einen unerwarteten Netzausfall,<br/>
                                der die Kommunikation zwischen den Abteilungen stark beeinträchtigt hat. <br/>
                                Unser IT-Team arbeitet bereits mit Hochdruck daran, die Ursache zu identifizieren<br/>
                                und das Netzwerk so schnell wie möglich wiederherzustellen.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">11.09.2023</Card.Footer>
                    </Card>
                    <Card className="text-center">
                        {/*<Card.Header><h4>Netzwerkausfälle</h4></Card.Header>*/}
                        <Card.Body>
                            <Card.Title>Telefonanlagenausfall</Card.Title>
                            <Card.Text>
                                Leider gab es einen Ausfall unserer Telefonanlage in der Zentrale.<br/>
                                Das hat zu erheblichen Unterbrechungen in den Kundengesprächen geführt.<br/>
                                Unsere Techniker sind vor Ort, um das Problem zu beheben und sicherzustellen,<br/>
                                dass die Telefonanlage so schnell wie möglich wieder funktioniert.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">01.09.2023</Card.Footer>
                    </Card>
                    <Card className="text-center">
                        {/*<Card.Header><h4>Netzwerkausfälle</h4></Card.Header>*/}
                        <Card.Body>
                            <Card.Title>WLAN-Probleme</Card.Title>
                            <Card.Text>
                                Einige Mitarbeiter im Büro berichteten heute Morgen über WLAN-Probleme,<br/>
                                die ihre Arbeit beeinträchtigen. Wir bitten alle, die von diesem Problem betroffen sind,<br/>
                                vorübergehend auf kabelgebundene Verbindungen umzusteigen,<br/>
                                während unsere IT-Abteilung das WLAN-Problem behebt.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">27.08.2023</Card.Footer>
                    </Card>
                    <Card className="text-center">
                        {/*<Card.Header><h4>Netzwerkausfälle</h4></Card.Header>*/}
                        <Card.Body>
                            <Card.Title>Druckerausfall im Hauptbüro</Card.Title>
                            <Card.Text>
                                Heute Vormittag ist einer unserer Hauptdrucker im Bürobereich ausgefallen,<br/>
                                was zu Verzögerungen bei der Ausgabe wichtiger Dokumente führte. Unsere IT-Abteilung<br/>
                                arbeitet daran, das Problem zu beheben und den Drucker so schnell wie möglich wieder <br/>
                                einsatzbereit zu machen.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">13.08.2023</Card.Footer>
                    </Card>
                    <Card className="text-center">
                        {/*<Card.Header><h4>Netzwerkausfälle</h4></Card.Header>*/}
                        <Card.Body>
                            <Card.Title>Serverausfall im Rechenzentrum:</Card.Title>
                            <Card.Text>
                                In unserem Rechenzentrum gab es heute einen unerwarteten Serverausfall, <br/>
                                der zu einem vorübergehenden Verlust des Zugriffs auf zentrale Datenbanken und <br/>
                                Anwendungen führte. Unsere IT-Teams arbeiten daran, die Serverprobleme zu beheben <br/>
                                und den Normalbetrieb so schnell wie möglich wiederherzustellen.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">29.07.2023</Card.Footer>
                    </Card>
                    <Card className="text-center">
                        {/*<Card.Header><h4>Netzwerkausfälle</h4></Card.Header>*/}
                        <Card.Body>
                            <Card.Title>E-Mail-Ausfälle:</Card.Title>
                            <Card.Text>
                                Unsere E-Mail-Dienste sind heute aufgrund eines technischen Problems ausgefallen, <br/>
                                was zu Schwierigkeiten bei der internen und externen Kommunikation geführt hat. <br/>
                                Unsere IT-Spezialisten arbeiten daran, die E-Mail-Server wieder online zu bringen <br/>
                                und alle verschobenen Nachrichten zuzustellen.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">03.07.2023</Card.Footer>
                    </Card>
                </div>
            </div>
        </div>
    );
}