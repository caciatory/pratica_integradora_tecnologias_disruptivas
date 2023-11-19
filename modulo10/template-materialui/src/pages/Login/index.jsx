import React ,{useEffect,useState} from "react";

const Login = () => {
  const [login,setLogin]= useState ('')
  resturn (
   <Grid item xs={12}>
      <FormControl fullWidth>
        <Input id="Nome_login" aria-describedby="Nome_login_helper_text" value={login} onChange={e => { setlogin(e.target.value); } } />
        <FormHelperText id="Nome-login_helper_text">login.</FormHelperText>
      </FormControl>
      </Grid>
     );

  }

  export default login;

