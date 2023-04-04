import react from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';

function Login() {
    return (
        <Container className='container'>
            <Row>
                <h1>Login</h1>
                <Form className='rounded p-4 p-sm-3'>
                    <Form.Group className="mb-3 input" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Insira seu Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Insira sua Senha" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </Row>
        </Container>
    );
}

export default Login;