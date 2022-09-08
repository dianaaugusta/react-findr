import FindrMenu from "../components/findr-menu"
import '../styles/findr-match-style.css'
import { useEffect } from "react";
import { useState } from "react";
import api from "../api";
import * as React from 'react';

function FindrMatch() {
    
    // const [imageSpecialty, setScialtyInput] = useState("");
    // const [specialty, setSpecialty] = useState("");
    // const [levelSpecialty, setLevelSpecialty] = useState("");
    const [infoUser, setInfoUser] = useState([]);

    useEffect(() => {

        api.get(`project/${sessionStorage.idContactor}`).then((res) => {
            setInfoUser(res.data);
            console.log(res.data)
        }).catch((err) => {
            console.log(err);
        })

    }, [])

// console.log("AAA", infoUser[0].levelKnowledge)



  
    return (
        <div class="container-match">
            <FindrMenu />

            <div class="content-match">

                <div class="match-refused">
                    <i class="pi pi-fw pi-times"></i>
                </div>

                <div class="match-information">
                    <div class="imagea-usuario"></div>
                    <div className="img-user-logado"></div>
                    <div class="name-user">
                        <h2>{sessionStorage.nomeUsuario}</h2>                    
                        <p>Projeto</p>
                        <div class="descriptionProject">{sessionStorage.description}</div>
                        <div class="technologics">
                            <h3>Tecnologias</h3>
                            <div class="tecnologics-and-levels">
                                <div class="tecnolgics-info">
                                    <div class="imagem-tecno"></div>
                                    {infoUser.map((res) => <div levelKnowledge= {res.levelKnowledge}/>) }
                                    <p></p>
                                    {/* <div class="bars-levels"></dp */}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="imagem-two"></div>
                </div>

                <div class="match-accepted">
                    <i class="pi pi-fw pi-heart-fill"></i>
                </div>

            </div>

        </div>
  );
}

export default FindrMatch;