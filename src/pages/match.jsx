import FindrMenu from "../components/findr-menu"
import '../styles/findr-match-style.css'
import { useEffect } from "react";
import { useState } from "react";
import CardTelaMatch from "../components/component-tela-match/card-tela-match";
import api from "../api";
import * as React from 'react';

function FindrMatch() {

    const [listCard, setListCard] = useState([]);

    function populaListCard(){
        infoProjects.map((projeto) => {
            setListCard(
            <CardTelaMatch 
            name = {projeto.name}
            descriptionProject = {projeto.descriptionProject}
            requiredArea = {projeto.requiredArea}
            requiredLanguages = {projeto.requiredLanguages}/>)
        })
    }

    const [infoProjects, setProject] = useState([]);
    useEffect(() => {

        api.get(`project`).then((res) => {
            setProject(res.data);
            console.log(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    console.log()

    return (
        <div class="container-match">
            <FindrMenu />

            <div class="content-match">
                <button onClick={populaListCard}></button>
            
                {
                    listCard.map[0]
                }
            </div>

        </div>
    );
}

export default FindrMatch;