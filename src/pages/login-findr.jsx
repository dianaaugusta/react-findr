
import FindrInput from "../components/findr-input";
import '../styles/findr-login-page-style.css';
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import api from "../api";
import LoginRequest from "./models/LoginRequest";


function FindrLogin() {
    const [loginInfo, setLoginInfo] = useState('');
    const [description, setDescription] = useState('');
    const [password, setPassword] = useState('');
    const loginPost = { email: description, password: password}

    const handleCallback = (childData) => {
        setLoginInfo(childData)
    }



    const navigate = useNavigate()

    function autenticar() {
        api.post("freelancer/login", loginPost).then((resposta) => {
            console.log(resposta)
            if (resposta.status === 200) {
                navigate('/suporte')
            }
            else if (resposta.status === 404) {
                alert("Usuario e/ou senha incorreto")
            }
        })
    }

    return (
        <>
            <div className="logo-findr">
                <img src="https://i.imgur.com/DGkk638.png" alt="" className="logo" />
            </div>

            <div className="container-login-user">
                <img src="https://i.imgur.com/6vXui7e.png" alt="" id="imgLogin" />
                <div className="saudacao-usuario">
                    <h1>Login</h1>
                    <h3 className="text-greetings">Venha conectar-se em sua conta e venha usufruir de
                        nossos melhores produtos e análises</h3>
                    <input id="input_id" placeholder="Usuario" handleCallback={handleCallback} onInput={(evento) => { setDescription(evento.target.value) }} />
                    <br />
                    <input id="input_senha" placeholder="Senha" type="password" onInput={(evento) => { setPassword(evento.target.value) }} />
                    <br />
                    <button id="btn-click-login" onClick={() => autenticar()}>Fazer Login</button>
                    
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
