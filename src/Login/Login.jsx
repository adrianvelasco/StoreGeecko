import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link} from 'react-router-dom';
import {
  Avatar, Button, CssBaseline, FormControl, FormControlLabel,
  Checkbox, Input, InputLabel, InputAdornment, Typography, Paper
} from '@material-ui/core';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import {  AccountCircle, LockIcon } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import '../Css/Login.css';
import '../Views/Navegation';

class Login extends Component{
   constructor(props){
    super(props);
    this.state = {
      account:'',
      password:'',

    }

  this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
   }

   handleSubmit(event) {
    const data = new FormData(event.target);

    fetch('https://api.geecko.com.mx/v1/auth/login',{
    method: 'POST',
    body: data,
    }).then((response) => {
      console.log(response.headers);
      if(response.count === 0){
        ReactDOM.render(
        alert("El usuario no existe"),
        document.getElementById('info')
      );
      }else{
        ReactDOM.render(
          <BrowserRouter>
           <Navegation/>
         </BrowserRouter>,
          document.getElementById('root')
        );
      }
      const access_token = response.headers.get('Authorization');
      localStorage.setItem("Authorization", access_token);
      return response.json()}
    ).then(auth => {
      console.log(auth);
      localStorage.setItem("token", auth.token);
    });

    this.input1.value = '';
    this.input2.value = '';
    event.preventDefault();
  }

  render(){
    const { classes } = this.props;
    const {account, password} = this.state;

    let content = (
      <div>
        <main className={classes.main}>
          <CssBaseline/>
            <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Iniciar Sesión
              </Typography>
                <form className={classes.form}onSubmit={this.handleSubmit}>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="Usuario">Usuario</InputLabel>
                    <Input ref={(input) => {this.input1 = input;}} value={account} onChange = {this.onChange}
                      startAdornment={
                        <InputAdornment position="start">
                          <AccountCircle variant="contained"/>
                        </InputAdornment>
                      } type="text" name="account" id="account" autoComplete="lname" autoFocus />
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Contraseña</InputLabel>
                    <Input ref={(input) => {this.input2 = input;}} value={password} onChange = {this.onChange}
                      startAdornment={
                        <InputAdornment position="start"  variant="outlined">
                          <LockIcon  variant="contained"/>
                        </InputAdornment>
                      }type="password" name="password" id="password" autoComplete="lname"/>
                  </FormControl>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" required />}
                    label="Recuerdame"
                  />
                  <MuiThemeProvider theme={button1}>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}  onChange={this.onChange}>
                       Iniciar sesión
                    </Button>
                  </MuiThemeProvider>
                  <div  variant="contained" className="strike" style={{padding:"2px"}}>
                     <span style={{color:'gray'}}><h5>O Inicia con</h5></span>
                  </div>
                   <MuiThemeProvider theme={button3}>
                    <Button fullWidth type="button"  variant="contained" color="primary" size="medium" className={classes.button2}  onChange={this.onChange}>
                       <FontAwesomeIcon icon={['fab', 'google']}  pull="left" size="1x"/>Gmail
                    </Button>
                  </MuiThemeProvider>
                  <MuiThemeProvider theme={button2}>
                    <Button fullWidth type="button"  variant="contained" color="primary" size="medium" className={classes.button3}  onChange={this.onChange}>
                       <FontAwesomeIcon icon={['fab', 'facebook']}  pull="left" size="1x"/>Facebook
                    </Button>
                  </MuiThemeProvider>
                    <br/>
                    <div className="linkregegister">
                        <Link to='/Register' style={{color: '#2196f3'}}><h5>¿Eres nuevo? Registrate</h5></Link>
                    </div>
                </form>
            </Paper>
        </main>
      </div>
    );
    return content;

  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
