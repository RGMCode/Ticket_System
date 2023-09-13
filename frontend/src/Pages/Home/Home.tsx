import Navigationbar from "../../components/Navigationbar/Navigationbar.tsx";
import Carousels from "../../components/Carousels/Carousels.tsx";
import './Home.css'


export default function Home() {

    return (
        <div>
            <Navigationbar/>
            <Carousels/>

            <div className="news-container">
                <div className={"mitteilungen"}><h1>Mitteilungen</h1></div>
                <div className="news-card">
                    <div className="news-header"><h2>Netzwerkausfälle</h2></div>
                    <div className="news-body">
                        <p>
                            Heute Morgen hatten wir in unserem Unternehmen einen unerwarteten Netzausfall,<br/>
                            der die Kommunikation zwischen den Abteilungen stark beeinträchtigt hat. <br/>
                            Unser IT-Team arbeitet bereits mit Hochdruck daran, die Ursache zu identifizieren<br/>
                            und das Netzwerk so schnell wie möglich wiederherzustellen.
                        </p>
                    </div>
                    <div className="news-footer">21.09.2023</div>
                </div>
                <div className="news-card">
                    <div className="news-header"><h2>Telefonanlagenausfall</h2></div>
                    <div className="news-body">
                        <p>
                            Leider gab es einen Ausfall unserer Telefonanlage in der Zentrale.<br/>
                            Das hat zu erheblichen Unterbrechungen in den Kundengesprächen geführt.<br/>
                            Unsere Techniker sind vor Ort, um das Problem zu beheben und sicherzustellen,<br/>
                            dass die Telefonanlage so schnell wie möglich wieder funktioniert.
                        </p>
                    </div>
                    <div className="news-footer">11.09.2023</div>
                </div>
                <div className="news-card">
                    <div className="news-header"><h2>W-Lan Probleme</h2></div>
                    <div className="news-body">
                        <p>
                            Einige Mitarbeiter im Büro berichteten heute Morgen über WLAN-Probleme,<br/>
                            die ihre Arbeit beeinträchtigen. Wir bitten alle, die von diesem Problem betroffen
                            sind,<br/>
                            vorübergehend auf kabelgebundene Verbindungen umzusteigen,<br/>
                            während unsere IT-Abteilung das WLAN-Problem behebt.
                        </p>
                    </div>
                    <div className="news-footer">01.09.2023</div>
                </div>
                <div className="news-card">
                    <div className="news-header"><h2>Druckerausfall in Verwaltungsgebäude 1</h2></div>
                    <div className="news-body">
                        <p>
                            Heute Vormittag ist einer unserer Hauptdrucker im Bürobereich ausgefallen,<br/>
                            was zu Verzögerungen bei der Ausgabe wichtiger Dokumente führte. Unsere IT-Abteilung<br/>
                            arbeitet daran, das Problem zu beheben und den Drucker so schnell wie möglich wieder <br/>
                            einsatzbereit zu machen.
                        </p>
                    </div>
                    <div className="news-footer">30.08.2023</div>
                </div>
                <div className="news-card">
                    <div className="news-header"><h2>Serverausfall im Rechenzentrum</h2></div>
                    <div className="news-body">
                        <p>
                            In unserem Rechenzentrum gab es heute einen unerwarteten Serverausfall, <br/>
                            der zu einem vorübergehenden Verlust des Zugriffs auf zentrale Datenbanken und <br/>
                            Anwendungen führte. Unsere IT-Teams arbeiten daran, die Serverprobleme zu beheben <br/>
                            und den Normalbetrieb so schnell wie möglich wiederherzustellen.
                        </p>
                    </div>
                    <div className="news-footer">13.08.2023</div>
                </div>
                <div className="news-card">
                    <div className="news-header"><h2>E-Mail-Ausfälle</h2></div>
                    <div className="news-body">
                        <p>
                            Unsere E-Mail-Dienste sind heute aufgrund eines technischen Problems ausgefallen, <br/>
                            was zu Schwierigkeiten bei der internen und externen Kommunikation geführt hat. <br/>
                            Unsere IT-Spezialisten arbeiten daran, die E-Mail-Server wieder online zu bringen <br/>
                            und alle verschobenen Nachrichten zuzustellen.
                        </p>
                    </div>
                    <div className="news-footer">01.06.2023</div>
                </div>
            </div>
        </div>
    );
}