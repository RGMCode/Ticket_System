import {Button, Form, FormLabel, Modal} from "react-bootstrap";
import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


type ModalLoginType = {
    onHide: () => void;
    show: boolean;
    setUser: (user:string) => void
}

export default function ModalLogin(props: ModalLoginType) {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const nav = useNavigate()

    function onChangeHandlerUsername(event:ChangeEvent<HTMLInputElement>){
        setUsername(event.target.value)
    }

    function onChnageHandlerPassword(event:ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }

    function login(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        axios.post("/api/user/login", undefined, {auth: {username, password}})
            .then((response) => props.setUser(response.data))
            .then(() => nav("/home"))
            .catch((error) => console.log(error));
    }

    return(
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h1>Login</h1>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={login}>
                        <FormLabel>Loginname:</FormLabel>
                        <input type={"text"} id={"username"} required={true} onChange={onChangeHandlerUsername}/>
                        <br/>
                        <FormLabel>Passwort:</FormLabel>
                        <input type={"password"} id={"password"} required={true} onChange={onChnageHandlerPassword}/>
                        <br/>
                        <Button variant={"success"}>login</Button>
                    </Form>
                    {/*<p>*/}
                    {/*    falls Sie noch keine Logindaten haben registrieren sich sich bitte hier.*/}
                    {/*</p>*/}
                </Modal.Body>

                {/*<Modal.Footer>*/}
                {/*    <Button onClick={props.onHide}>Close</Button>*/}
                {/*</Modal.Footer>*/}
            </Modal>
        </div>
    );

}