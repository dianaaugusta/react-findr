import FindrMenu from "../components/findr-menu"
import '../styles/findr-match-style.css'
import { useEffect } from "react";
import { useState } from "react";
import CardTelaMatchContratante from "../components/component-tela-match/card-tela-match-contactor";
import api from "../api";
import * as React from 'react';

function FindrMatchContratante() {
    const [infoFreelancer, setFreelancer] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [infoSpecialty, setSpecialty] = useState([]);
    useEffect(() => {
        api.get(`freelancer`).then((res) => {
            setFreelancer(res.data);
            console.log(res.data)

            
                const freelancer = infoFreelancer[selectedIndex];
                console.log(freelancer)
                console.log(infoFreelancer)
                api.get(`/specialty/freelancer/${freelancer.idUserFreelancer}`).then((res) => {
                    setSpecialty(res.data);
                    console.log(res.data)
                }).catch((err) => {
                    console.log(err);
                })
          

        }).catch((err) => {
            console.log(err);
        })
    }, [])


    const handleAccept = () => {
        const freelancer = infoFreelancer[selectedIndex];
        api.post('/like/freelancer/' + sessionStorage.idContactor + '/' + freelancer.idFreelancer + '/true/')
        .then(res => {
            setSelectedIndex(selectedIndex + 1);
            alert("Você deu Like no projeto " + freelancer.name)
        })
    }

    const handleRefuse = () => {
            setSelectedIndex(selectedIndex + 1);
    }


    const renderFreelancer = () => {
        const freelacer = infoFreelancer[selectedIndex];
        const specialty = infoSpecialty[selectedIndex];
        console.log(specialty)

        if (freelacer === undefined) {
            return (
                <span>Sem freelancers atualize a pagina</span>
            )
        }

        return (
            <CardTelaMatchContratante 
                name = {freelacer.name}
                // // ocupationArea = {specialty.ocupationArea}
                // tecnologias = {specialty.technologyUsed}
                // disponibilidade = {freelacer.avaliableTime}
                onAccept={handleAccept}
                onRefuse={handleRefuse}
            />
        )
    }

    return (
        <div className="container-match">
            <FindrMenu />
            <div className="content-match">
                {renderFreelancer()}
            </div>
        </div>
    );
}

export default FindrMatchContratante;