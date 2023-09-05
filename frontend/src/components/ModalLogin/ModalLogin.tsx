import {Button, Col, Form, Modal} from "react-bootstrap";
import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Row from "react-bootstrap/Row";


type ModalLoginType = {
    onHide: () => void;
    show: boolean;
    setUser: (user:string) => void
}

export default function ModalLogin({onHide, show, setUser}: ModalLoginType) {


    const [userLoginName, setUserLoginName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const nav = useNavigate()

    function onChangeHandlerUsernamLoginName(event:ChangeEvent<HTMLInputElement>){
        setUserLoginName(event.target.value)
    }

    function onChnageHandlerUserPassword(event:ChangeEvent<HTMLInputElement>){
        setUserPassword(event.target.value)
    }


    // function login(event:FormEvent<HTMLFormElement>){
    //     event.preventDefault();
    //     axios.post("/api/user/login", undefined, {auth: {username: userLoginName, password: userPassword}})
    //         .then((response) => {
    //             props.setUser(response.data);
    //             console.log("User: " , response.data)
    //             props.onHide();
    //             nav("/home");
    //         })
    //         .then(() => {
    //             console.log("navigate to /home")
    //             // nav("/home");
    //         })
    //         .catch((error) => console.log(error));
    // }

    async function login(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            const response = await axios.post("/api/user/login", undefined, {auth: {username: userLoginName, password: userPassword}});
            setUser(response.data);
            console.log("User: ", response.data)
            onHide();
            nav("/home");
            console.log("navigate to /home")
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            <Modal

                // size="lg"
                // aria-labelledby="contained-modal-title-vcenter"
                // centered
                onHide={onHide}
                show={show}
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
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Row>
                                <Col>
                                    <Form.Label column sm="2">
                                        Loginname:
                                    </Form.Label>
                                    <input type="text" id={"userDepartment"} required={true} onChange={onChangeHandlerUsernamLoginName}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label column sm="2">
                                        Password:
                                    </Form.Label>
                                    <input type="text" id={"userRoom"} required={true} onChange={onChnageHandlerUserPassword}/>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Button type={"submit"} variant={"success"}>login</Button>
                    </Form>
                </Modal.Body>

                {/*<Modal.Footer>*/}
                {/*    <Button onClick={props.onHide}>Close</Button>*/}
                {/*</Modal.Footer>*/}
            </Modal>
        </div>
    );

}