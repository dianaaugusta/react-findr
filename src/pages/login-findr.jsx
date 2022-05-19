import FindrInput from "../components/findr-input";
import '../styles/findr-login-page-style.css';

function FindrLogin(){
    return(
        <>
            <div className="container-login-user">
                <div className="saudacao-usuario">
                    <h1>Login</h1>
                    <h3>Venha conectar-se em sua conta e venha usufruiu de 
                    nossos mehores produtos e análises</h3>
                </div>
                <FindrInput tooltip="abc"/>      
            </div>  
        </>

    );
}

export default FindrLogin;
