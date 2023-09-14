import {useState, FormEvent, ChangeEvent} from 'react';
import {Modal, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useUser} from '../../UserContext.tsx';

type ModalLoginProps = {
    onHide: () => void;
    show: boolean;
};

export default function ModalLogin({onHide, show}: ModalLoginProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const {setUser} = useUser();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/user/login', {}, {auth: {username, password}});
            if (response.data) {
                setUser(username);
                navigate('/home');
            }
        } catch (error) {
            console.log('Login failed:', error);
        }
    };

    return (
        <Modal
            onHide={onHide}
            show={show}
            aria-labelledby="contained-modal-title-vcenter"
            size={'lg'}
            centered>
            <Modal.Header closeButton>
                <Modal.Title><h1>Login</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text"
                                      onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password"
                                      onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <br/>
                    <Button type="submit" variant={"info"}>Login</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

