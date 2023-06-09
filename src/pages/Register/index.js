import react, { useState } from 'react';
import './styles.css';

import NavBar from '../../components/NavBar';
import { useRegistrationForm } from './useRegistrationForm';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import InputMask from 'react-input-mask';
import api from '../../axios/config';

import {
  Container,
  Button,
  Box,
  TextField,
  Zoom,
  Grid,
  Typography,
  IconButton,
  Snackbar,
  Alert
}
  from '@mui/material';
import makePayload from './makePayload';

function Register() {
  const [adresses, setAdresses] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [openSuccess, setOpenSuccess] = useState();
  const [openError, setOpenError] = useState();
  const formik = useRegistrationForm();

  const handleSubmit = async () => {
    setIsLoading(true);
    const payload = makePayload(formik.values, adresses)

    try {
      await api.post("/api/users", payload)

      setOpenSuccess(true)
      setIsLoading(false)
      window.location.href = "/login"
    } catch (error) {
      console.log(error)
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

  const handleAddAdress = (adress) => {
    if (adress) {
      const newAdress = {
        id: adresses.length,
        adress: adress
      }
      setAdresses([...adresses, newAdress])
    }
  }

  const handleRemoveAdress = (adress) => {
    const newAdresses = adresses
    const foundAdress = adresses.indexOf(adress)
    if (foundAdress > -1) {
      newAdresses.splice(foundAdress, 1)
    }

    setAdresses([...newAdresses])
  }

  return (
    <>
      <NavBar />
      <Zoom in={true} style={{ transitionDelay: '200ms' }}>
        <Container maxWidth="sm">
          <Box sx className="formBox">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  Informações de cadastro
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="name"
                  label="Nome"
                  type="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  error={formik.touched.name && formik.errors.name}
                  helperText={formik.touched.name && formik.errors.name}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="password"
                  label="Senha"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  error={formik.touched.password && formik.errors.password}
                  helperText={formik.touched.password && formik.errors.password}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  error={formik.touched.email && formik.errors.email}
                  helperText={formik.touched.email && formik.errors.email}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <InputMask
                  mask="999.999.999-99"
                  value={formik.values.cpf}
                  disabled={false}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  maskChar=" "
                >
                  {() =>
                    <TextField
                      fullWidth
                      id="cpf"
                      label="Cpf"
                      error={formik.touched.cpf && formik.errors.cpf}
                      helperText={formik.touched.cpf && formik.errors.cpf}
                      variant="outlined"
                    />
                  }
                </InputMask>
              </Grid>

              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={11}>
                    <TextField
                      fullWidth
                      id="adress"
                      label="Endereço"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.adress}
                      error={formik.touched.adress && formik.errors.adress}
                      helperText={formik.touched.adress && formik.errors.adress}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={1} style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
                    <IconButton
                      disabled={!formik.touched.adress ? true : false}
                      onClick={() => handleAddAdress(formik.values.adress)}
                    >
                      <AddIcon />
                    </IconButton>
                  </Grid>
                  {adresses.length > 0 ?
                    adresses.map((item) => {
                      return (
                        <Grid container xs={12} style={{ marginLeft: "0.5rem" }}>
                          <Grid item xs={11}>
                            <Typography variant="h7" color="textPrimary" gutterBottom>
                              {item.adress}
                            </Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <IconButton
                              onClick={() => handleRemoveAdress(item)}
                            >
                              <RemoveIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                      )
                    })
                    : null}

                </Grid>


              </Grid>

              <Grid item xs={12}>
                <InputMask
                  mask="(99) 99999-9999"
                  value={formik.values.phone}
                  disabled={false}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  maskChar=" "
                >
                  {() =>
                    <TextField
                      fullWidth
                      id="phone"
                      label="Telefone"
                      error={formik.touched.phone && formik.errors.phone}
                      helperText={formik.touched.phone && formik.errors.phone}
                      variant="outlined"
                    />
                  }
                </InputMask>
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  disabled={!formik.isValid}
                  onClick={handleSubmit}
                >
                  {isLoading ? 'Carregando' : 'Cadastrar'}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Zoom>
      <Snackbar open={openSuccess} autoHideDuration={3000} onClose={handleCloseSuccess}>
        <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
          Cadastro efetuado com sucesso!
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={3000} onClose={handleCloseError}>
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          Ops, aconteceu algo de errado, tente novamente por favor!
        </Alert>
      </Snackbar>
    </>
  )
}

export default Register;