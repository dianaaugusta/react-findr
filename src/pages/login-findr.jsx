import { render } from "@testing-library/react";
import FindrButton from "../components/findr-button";
import FindrInput from "../components/findr-input";
import '../styles/findr-login-page-style.css';

function FindrLogin() {
    return (
        <>
        <div className="logo-findr">
            <img src="https://logodownload.org/wp-content/uploads/2014/02/caixa-logo-5.png" alt="" className="logo" />
        </div>
            <div className="container-login-user">
                <div className="saudacao-usuario">
                    <h1>Login</h1>
                    <h3 className="text-greetings">Venha conectar-se em sua conta e venha usufruir de
                        nossos mehores produtos e análises</h3>
                    <FindrInput tooltip="abc" />
                    <FindrInput tooltip="abc" />
                    <FindrButton label="Login" className="button-login" onClick={() => this.handleClick()}/>
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
