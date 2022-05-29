
import FindrInput from "../components/findr-input";
import '../styles/findr-login-page-style.css';
import React from "react";
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';


const handleClick = () => {
    var user = document.getElementById('input_id').value;
    sessionStorage.setItem('user', JSON.stringify(user));
    var obj = JSON.parse(sessionStorage.user);
    alert(JSON.stringify(sessionStorage.getItem('user')));
}

function FindrLogin() {
    
   
    return (
        <>

        <div className="logo-findr">
            <img src="https://i.imgur.com/DGkk638.png" alt="" className="logo" />
        </div>
            <div className="container-login-user">
                <div className="saudacao-usuario">
                    <h1>Login</h1>
                    <h3 className="text-greetings">Venha conectar-se em sua conta e venha usufruir de
                        nossos mehores produtos e análises</h3>
                    <FindrInput id="input_id" tooltip="abc" />
                    <FindrInput tooltip="abc" />
                    <Button component={Link} to="/suporte">Click Me</Button>
                        <div className="password-options">
                            <a href="#" className="a-href-password">Esqueceu a senha?</a>
                            <a href="#" className="a-href-password">Recuperar Senha</a>
                        </div>
                    <p className="also-login">Também faça Login com:</p>
                    <div className="login-options">
                        <i className="pi pi-facebook"></i>
                        <i className="pi pi-twitter"></i>
                        <i className="pi pi-google"></i>
                    </div>
                </div>
            </div>
        </>

    );
}

export default FindrLogin;
