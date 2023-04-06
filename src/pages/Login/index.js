import react, { useState } from 'react';
import NavBar from '../../components/NavBar';
import {
    Container,
    Box,
    Grid,
    TextField,
    Typography,
    Zoom,
    Button,
    Alert,
    Snackbar
} from '@mui/material';
import api from '../../axios/config';

function Login() {
    const [isLoading, setIsLoading] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [openSuccess, setOpenSuccess] = useState();
    const [openError, setOpenError] = useState();

    const handleSubmit = async () => {
        setIsLoading(true)
        try {
            const response = await api.post(`/api/Auth?email=${email}&password=${password}`)

            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('token', JSON.stringify(response.data.token));

            setOpenSuccess(true)
            setIsLoading(false)
            window.location.href = "/"
        } catch (error) {
            setOpenError(true)
            setIsLoading(false)
        }
    }

    const handleCloseSuccess = () => {
        setOpenSuccess(false);
    }
    
    const handleCloseError = () => {
        setOpenError(false);
    }

    return (
        <>
            <NavBar />
            <Zoom in={true} style={{ transitionDelay: '200ms' }}>
                <Container maxWidth="sm">
                    <Box sx className="formBox" style={{ marginTop: "12rem" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h6" color="textPrimary" gutterBottom>
                                    Informações de Login
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="password"
                                    label="Senha"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    onClick={handleSubmit}
                                >
                                    {isLoading ? "Carregando" : "Login"}
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>

                </Container>
            </Zoom>

            <Snackbar open={openSuccess} autoHideDuration={3000} onClose={handleCloseSuccess}>
                <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
                    Login efetuado com sucesso!
                </Alert>
            </Snackbar>
            <Snackbar open={openError} autoHideDuration={3000} onClose={handleCloseError}>
                <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
                    Ops, Email ou senha inválidos, tente novamente por favor!
                </Alert>
            </Snackbar>
        </>
    );
}

export default Login;