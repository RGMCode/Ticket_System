import Navigationbar from "../../components/Navigationbar/Navigationbar.tsx";
import Carousels from "../../components/Carousels/Carousels.tsx";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";


export default function Home() {

    return(
        <div>
            <Navigationbar/>
            <Carousels/>
            <Button variant={"outline-warning"}><Link to={"/home"}>Ticket</Link></Button>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}