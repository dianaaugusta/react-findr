import { useState } from "react";
import FindrMenu from "../components/findr-menu";
import "../styles/findr-habilits-project-style.css";
import api from '../api';


function HabilitsProject() {

    const [nameProjectInput, setNameProjectInput] = useState("");
    const [descriptionProjectInput, setDescriptionProjectInput] = useState("");
    const [habiitProjectInput, setHabilitProjectInput] = useState("");
    const [requiredAreaInput, setRequiredAreaInput] = useState("");
    const [quantifyProfissionalsInput, setQuantifyProfissionalsInput] = useState("")
    const [iniciante, setIniciante] = useState(true);
    const [intermediario, setIntermediario] = useState(true);
    const [avancado, setAvancado] = useState(true);


    const [levelKnowledgeInput, setlevelKnowledgeInput] = useState("")

    const handleChange=(data)=>{
        if(data=="iniciante"){
            if(iniciante==true){
                console.log(data, "our value")
            }
            setIniciante(!iniciante)
        }
        if(data=="intermediario"){
            if(intermediario==true){
                console.log(data, "out value")
            }
            setIntermediario(!intermediario)
        }

        if(data=="avancado"){
            if(avancado==true){
                console.log(data, "our value")
            }
            setAvancado(!avancado)
        }
    }


    function postProjectContratante(e) {

        const userAtivo = sessionStorage.getItem("user");
        window.sessionStorage.setItem("user", userAtivo);
        e.preventDefault();
        
        const objProject = {
            nameProject: nameProjectInput,
            descriptionProject: descriptionProjectInput,
            requiredArea: requiredAreaInput,
            requiredLanguages: habiitProjectInput,
            levelKnowledge: levelKnowledgeInput,
            quantifyProfissionals: quantifyProfissionalsInput,
            image: "",
            contactor: {
                idContactor: "",
            }  
        }

        api.post("project", objProject).then(res =>{
            alert("cadastrado com sucesso!");
            // sessionStorage.setItem("user", idContactor)
        }).catch(erro => {
            alert("Erro no cadastro!");
            console.log(objProject)
            console.log(erro);
        })
    
    
    }


    return (
        <div class="content">
                <FindrMenu />

                 <form action="" onSubmit={postProjectContratante}>
                <div class="container">
                        <div class="habilits-description">
                            <h2>Cadastro de Habilidades</h2>

                            <div class="title-project">
                                <p>Nome do projeto</p>
                                <input type="text" value={nameProjectInput} onChange={((event) => {
                                    setNameProjectInput(event.target.value)
                                })} />
                            </div>

                            <div class="description-project">
                                <p>Descreva seu projeto</p>
                                <div class="description">
                                    <textarea value={descriptionProjectInput} onChange={((event) =>{
                                        setDescriptionProjectInput(event.target.value)
                                    })}></textarea>
                                </div>

                                <div class="requiredArea">
                                    <p>Àrea de atuação</p>
                                    <input type="text" value={requiredAreaInput} onChange={((event) =>{
                                        setRequiredAreaInput(event.target.value)
                                    })}/>
                                </div>

                                <div class="quantifyProfissionals">
                                    <p>Quantidade de profissionais</p>
                                    <input type="text" value={quantifyProfissionalsInput} onChange={((event) =>{
                                        setQuantifyProfissionalsInput(event.target.value)
                                    })}/>
                                </div>
                            </div>

                            <div class="combobox-habilits">
                                <select onChange={((event) => habiitProjectInput(event.target.value))}>
                                    <option value={''} hidden="true" default="true">Selecione uma habiliade</option>
                                    <option value={'Java'}>Java</option>
                                    <option value={'Kotlin'}>Kotlin</option>
                                    <option value={'JavaScript'}>Java Script</option>
                                    <option value={'SpringBoot'}>Spring Boot</option>
                                    <option value={'MySQL'}>MySQL</option>
                                    <option value={'React'}>React</option>
                                    <option value={'Angular'}>Angular</option>
                                    <option value={'Viws'}>View</option>
                                    <option value={'UX'}>UX</option>
                                    <option value={'UI'}>UI</option>
                                    <option value={'TypeScript'}>TypeScript</option>
                                    <option value={'PHP'}>PHP</option>
                                    <option value={'Python'}>Python</option>
                                    <option value={'C#'}>C#</option>
                                    <option value={'C++'}>C++</option>
                                    <option value={'Ruby'}>Ruby</option>
                                    <option value={'jQuery'}>jQuery</option>
                                    <option value={'Vue'}>Vue</option>
                                </select>
                            </div>

                            <div class="level-habilits">
                                <div class="title">NÍVEL DE HABILIDADE</div>
                                <div class="types-levels">
                                    <div class="level-beginner">
                                        <input type="radio" value={iniciante} onChange={()=>handleChange("iniciante")}/>
                                        <p>Iniciante</p>
                                    </div>

                                    <div class="level-intermediary">
                                        <input type="radio" value={intermediario} onChange={()=>handleChange("intermediario") }/>
                                        <p>Intermediário</p>
                                    </div>

                                    <div class="level-advanced">
                                        <input type="radio" value={avancado} onChange={()=>handleChange("avancado")}/>
                                        <p>Avançado</p>
                                    </div>
                                </div>
                                
                                {/* <div class="button-registration-habilit">
                                    <button onClick={saveHabilit}>Cadastrar habiliade</button>
                                </div> */}

                                {/* <div class="habilits-with-level">
                                    <div class="habiit-content">
                                    <span class="habilit-level">Java(Iniciante)</span>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div class="info-user">
                            <div class="info-user-contratante">
                                <h1>Olá, Joyce!</h1>
                                <p>Conte-nos um pouco mais sobre os projetos que você possui</p>
                            </div>

                            <div class="btn-contratante">
                                <button>Contratante</button>
                            </div>

                            <div class="btn-cadastrar">
                                <button>Cadastrar</button>
                            </div>
                        </div>

                </div>
                 </form> 
            </div>


    )
}

export default HabilitsProject;