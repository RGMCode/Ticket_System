import {useState, FormEvent, ChangeEvent} from 'react';
import {Modal, Form, Button, Alert,} from 'react-bootstrap';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useUser} from '../../UserContext.tsx';
import './ModalLogin.css'

type ModalLoginProps = {
    onHide: () => void;
    show: boolean;
};

export default function ModalLogin({onHide, show}: ModalLoginProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {setUser} = useUser();
    const [showAlert, setShowAlert] = useState(false);

    const handleClose = () => {
        setShowAlert(false);
        onHide();
    };


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/user/login', {}, { auth: { username, password } });
            if (response.data) {
                setUser(username);
                navigate('/home');
            }
        } catch (error) {
            console.log('Login failed:', error);
            setShowAlert(true);
            setUsername('');
            setPassword('');
        }
    };

    return (
        <Modal
            onHide={handleClose}
            show={show}
            aria-labelledby="contained-modal-title-vcenter"
            size={'lg'}
            centered
        >
            <Modal.Header className={"headerLogin"} closeButton>
                <Modal.Title>
                    <h1>Login</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form style={{marginLeft:'20px'}} onSubmit={handleSubmit}>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control
                            className={"inputField"}
                            type="text"
                            value={username} // Use the controlled component approach
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            className={"inputField"}
                            type="password"
                            value={password} // Use the controlled component approach
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <br/>
                    <Button type="submit" variant="info">
                        Login
                    </Button>
                </Form>
            </Modal.Body>
            <div className="d-flex justify-content-center mt-3">
                {showAlert && (
                    <Alert
                        variant="danger"
                        onClose={() => setShowAlert(false)}
                        style={{textAlign: 'center'}}
                        dismissible
                    >
                        <Alert.Heading>Logindaten nicht korrekt!</Alert.Heading>
                        <p>
                            Bitte stellen Sie sicher, dass Sie Ihren Benutzernamen und Ihr<br/>
                            Passwort korrekt eingegeben haben, um sich anzumelden. <br/>
                            Falsche Eingaben können zu Login-Problemen führen.
                        </p>
                    </Alert>
                )}
            </div>
        </Modal>
    );
}