import FindrMenu from "../components/findr-menu"
import '../styles/findr-match-style.css'
import { useEffect } from "react";
import { useState } from "react";
import CardTelaMatch from "../components/component-tela-match/card-tela-match";
import api from "../api";
import * as React from 'react';

function FindrMatch() {

    // const [imageSpecialty, setScialtyInput] = useState("");
    // const [specialty, setSpecialty] = useState("");
    // const [levelSpecialty, setLevelSpecialty] = useState("");
    const [infoProjects, setProject] = useState([]);

    useEffect(() => {

        api.get(`project`).then((res) => {
            setProject(res.data);
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

                {
                    infoProjects.map((item) => 
                    <CardTelaMatch 
                    name={item.nameProject} 
                    descriptionProject={item.descriptionProject} 
                    requiredArea={item.requiredArea}
                    requiredLanguages={item.requiredLanguages} />)
                }

                <div class="match-accepted">
                    <i class="pi pi-fw pi-heart-fill"></i>
                </div>

            </div>

        </div>
    );
}

export default FindrMatch;