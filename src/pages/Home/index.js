import react from 'react';
import NavBar from '../../components/NavBar'
import HomeImage from '../../assets/HomeSvg.svg'

import './styles.css'

import {
    Row,
    Col,
    Container
} from 'react-bootstrap';

function Home() {
    return (
        <>
            <NavBar />
            <Container>

                <Row className='homeBox'>
                    <Col className='col' style={{ width: "19rem" }}>
                        <Row>
                            <h1>Bem vindo à Cad+</h1>
                            <h4>Já possui um cadastro em nosso site?,<br></br>
                                não perca tempo o botão está logo ali na direita!</h4>
                        </Row>
                    </Col>
                    <Col className='col'>
                        <img src={HomeImage} alt="React Logo" style={{ width: "100%" }} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;