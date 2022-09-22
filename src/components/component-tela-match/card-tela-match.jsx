import { useState } from "react";
import "../component-tela-match/card-tela-match.css"


function CardTelaMatch(props) {
    const [name, setNameContactor] = useState(props.name)
    const [descriptionProject, setDescriptionProject] = useState(props.descriptionProject)
    const [requiredArea, setRequiredArea] = useState(props.requiredArea)
    const [requiredLanguages, setRequiredLanguages] = useState(props.requiredLanguages)
    return (
        <div class="match-information">
            <div class="imagea-usuario"></div>
            <div className="img-user-logado"></div>
            <div class="name-user">
                <h1>{name}</h1>
                <h3>Projeto</h3>
                {descriptionProject}
                <div class="technologics">
                    <div class="tecnologics-and-levels">
                        <div class="tecnolgics-info">
                            <div class="imagem-tecno"></div>
                            <h3>Área Requirida</h3>
                            <p>{requiredArea}</p>
                            <h3>Linguagens requeridas</h3>
                            <p>{requiredLanguages}</p>
                            {/* <div class="bars-levels"></dp */}
                        </div>
                    </div>

                </div>
            </div>
            <div class="imagem-two"></div>
        </div>

    )
}

export default CardTelaMatch;