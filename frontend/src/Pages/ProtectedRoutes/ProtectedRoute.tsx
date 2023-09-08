import './ProtectedRoute.css';
import {useUser} from '../../UserContext';
import {Outlet} from "react-router-dom";
import {Alert} from "react-bootstrap";


export default function ProtectedRoute() {
    const {user} = useUser();

    if (!user) {
        return <div className={"alert"}>
            <div>
                <Alert variant={"danger"}>
                    <h1>Sie sind nicht mehr angemeldet!</h1>
                    <br/>
                    bitte klicken sie
                    <Alert.Link href="/"> hier </Alert.Link>
                    um auf die Hauptseite zu gelangen
                </Alert>
            </div>
        </div>
    }

    return <Outlet/>;
}