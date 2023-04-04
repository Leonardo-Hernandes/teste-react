import react from 'react';

import './styles.css';

import { Container, Row, Form, Button } from 'react-bootstrap';

function Register() {
  return (
    <Container className='container'>
      <Row>
        <h1>Cadastro</h1>
        <Form className='rounded p-4 p-sm-3'>

          <Form.Group className="mb-3 input" controlId="formBasicName">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control type="name" placeholder="Insira seu Nome" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Insira sua Senha" />
          </Form.Group>

          <Form.Group className="mb-3 input" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Insira seu Email" />
          </Form.Group>

          <Form.Group className="mb-3 input" controlId="formBasicCpf">
            <Form.Label>CPF</Form.Label>
            <Form.Control type="cpf" placeholder="Insira seu CPF" />
          </Form.Group>

          <Form.Group className="mb-3 input" controlId="formBasicAdress">
            <Form.Label>Endereço</Form.Label>
            <Form.Control type="adress" placeholder="Insira seu Endereço" />
          </Form.Group>

          <Form.Group className="mb-3 input" controlId="formBasicPhone">
            <Form.Label>Número de telefone</Form.Label>
            <Form.Control type="phone" placeholder="Insira seu Número de telefone ex: 61 99999-9999" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Row>
    </Container>
  )
}

export default Register;