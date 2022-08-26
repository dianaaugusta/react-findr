import FindrMenu from "../components/findr-menu";
import * as React from 'react';

import "../styles/findr-perfil-free-style.css"


function Perfil() {
    return (
        <div class="screen-perfil">
            <FindrMenu />

            <div class="screen2">

                <div class="card-perfil">
                    <div class="img-freelancer">
                        <img src="https://cdn.icon-icons.com/icons2/510/PNG/512/person_icon-icons.com_50075.png" alt="" />
                        <h3>NOME FREELANCER</h3>
                        <p>INFOR DO DEV (ICONE DO GITHUB DO DEV)NOME DO GIT </p>
                        <p>localização do dev (img da localização)</p>
                    </div>
                </div>

                <div class="screen3">
                    <div class="certificacoes">
                        <h1>Certificações</h1>
                        <img src="https://cdn.icon-icons.com/icons2/510/PNG/512/person_icon-icons.com_50075.png" alt="" />
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