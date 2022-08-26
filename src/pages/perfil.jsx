import FindrMenu from "../components/findr-menu";
import * as React from 'react';
import Efect1 from "../imgs/efects1.png"
import Efect2 from "../imgs/efects2.png"
import "../styles/findr-perfil-free-style.css"


function Perfil() {
    return (
        <div class="screen-perfil">
            <FindrMenu />

            <div class="screen2">

                <div class="card-perfil">
                    <div class="enfeite1">
                        <img src={Efect1} />
                    </div>
                    <div class="img-freelancer">
                        <img src="https://cdn.icon-icons.com/icons2/510/PNG/512/person_icon-icons.com_50075.png" alt="" />
                        <h3>NOME FREELANCER</h3>
                        <p>INFOR DO DEV (ICONE DO GITHUB DO DEV)NOME DO GIT </p>
                        <p>localização do dev (img da localização)</p>
                    </div>
                    <div class="enfeite2">
                        <img src={Efect2} />
                    </div>
                </div>

                <div class="screen3">
                    <div class="certificacoes">
                        <div class="certificacoes-titulo">
                            <h1>Certificações</h1>
                            <img src="https://cdn.icon-icons.com/icons2/510/PNG/512/person_icon-icons.com_50075.png" alt="" />
                        </div>
                        <div class="certificado-info">
                            <img src={Efect1} />
                            <div class="certificado-info-mais">
                                <h3>Sobre o que é o certificado</h3>
                                <p>Plataforma</p>
                                <p>Emissão</p>
                            </div>
                        </div>
                        <div class="certificado-info">
                            <img src={Efect1} />
                            <div class="certificado-info-mais">
                                <h3>Sobre o que é o certificado</h3>
                                <p>Plataforma</p>
                                <p>Emissão</p>
                            </div>
                        </div>
                        <div class="certificado-info">
                            <img src={Efect1} />
                            <div class="certificado-info-mais">
                                <h3>Sobre o que é o certificado</h3>
                                <p>Plataforma</p>
                                <p>Emissão</p>
                            </div>
                        </div>
                    </div>
                    <div class="matchs">
                        <h1>Matchs</h1>
                        <div class="grid-container">
                            <div class="grid-item">1</div>
                            <div class="grid-item">2</div>
                            <div class="grid-item">3</div>
                            <div class="grid-item">4</div>
                            <div class="grid-item">5</div>
                            <div class="grid-item">6</div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Perfil;