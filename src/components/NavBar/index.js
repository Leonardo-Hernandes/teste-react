import './styles.css';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button
} from '@mui/material';

function NavBar() {
    const user = localStorage.user;

    const logOut = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: '#f3f3f3' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: "#000" }}>
                        Cad+
                    </Typography>
                    <Button variant="text" style={{ color: "#000" }} href="/" >Página inicial</Button>
                    {!user ?
                        <>
                            <Button variant="text" style={{ color: "#000" }} href="/login" >Login</Button>
                            <Button variant="text" style={{ color: "#000" }} href="/register" >Cadastro</Button>
                        </>
                        : <Button variant="text" style={{ color: "#000" }} href="/" onClick={logOut} >Sair</Button>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;