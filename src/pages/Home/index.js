import react from 'react';
import NavBar from '../../components/NavBar'
import HomeImage from '../../assets/HomeSvg.svg'

import './styles.css'

import {
    Container,
    Grid,
    Typography,
}
    from '@mui/material';
import { json } from 'react-router-dom';

function Home() {
    const user = JSON.parse(window.localStorage.getItem('user'));

    console.log(user);

    return (
        <>
            <NavBar />
            <Container maxWidth="xl" className='homeBox'>
                <Grid container>
                    <Grid item xs={6} style={{ marginTop: "9rem" }}>
                        <Typography variant="h3" color="textPrimary" gutterBottom>
                            {user ? `Olá ${user.name}, Seja bem vindo à Cad+` : 'Bem vindo à Cad+'}
                        </Typography>
                        {user ?
                            <Typography variant="h5" color="textPrimary" gutterBottom>
                                Oque gostaria de fazer agora?
                            </Typography>
                            : <Typography variant="h5" color="textPrimary" gutterBottom>
                                Já possui um cadastro em nosso site?,<br></br>
                                não perca tempo o botão está logo ali na direita!
                            </Typography>}

                    </Grid>
                    <Grid item xs={6}>
                        <img src={HomeImage} alt="React Logo" style={{ width: "100%" }} />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home;