import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from '../../axiosConfig'; 

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/login', {
            email: email,
            password: password
        }).then(() => {
            console.log("1111")
        });
    }

    return (
        <div className="add-form">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicPrice">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Podaj emial"  value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicImageUrl">
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control type="text" placeholder="Podaj hasło"  value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">Zaloguj</Button>
            </Form>
        </div>
    )
}

export default LoginForm
