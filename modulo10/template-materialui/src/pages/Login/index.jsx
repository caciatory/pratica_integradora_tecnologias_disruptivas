import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";

const Login = () => {
  const [login, setLogin] = useState("");

  const handleLogin = () => {
    // Adicione aqui a lógica para lidar com o login
    console.log("Login:", login);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <Input
            id="Nome_login"
            aria-describedby="Nome_login_helper_text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <FormHelperText id="Nome-login_helper_text">Login</FormHelperText>
        </FormControl>
      </Grid>
      {/* Adicionando um botão para simular o processo de login */}
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Entrar
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;


