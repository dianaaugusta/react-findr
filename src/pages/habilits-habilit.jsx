import FindrMenu from "../components/findr-menu";
import "../styles/findr-habilits-habilit-style.css"



function HabilitsHabilit() {
    


    return (
        <div class="container-habilit">
            <FindrMenu />
            
            <div class="content-habilit">
                <div class="habilits-freelancer">
                    <h2>Cadastro de Habilidades</h2>
                    <div class="habilits-freelancer-select">
                        <select>
                            <option>Selecione uma habiliade</option>
                            <option>Java</option>
                            <option>Kotlin</option>
                            <option>JavaScript</option>
                            <option>Spring Boot</option>
                            <option>MySQL</option>
                            <option>React</option>
                            <option>Angular</option>
                            <option>View</option>
                            <option>UX</option>
                            <option>UI</option>
                            <option>TypeScript</option>
                            <option>PHP</option>
                            <option>Python</option>
                            <option>C#</option>
                            <option>C++</option>
                            <option>Ruby</option>
                            <option>jQuery</option>
                            <option>Vue</option>
                        </select>
                    </div>

                    <div class="level-habilits-freelancer"> 
                        <div class="title-free">NÍVEL DE HABILIDADE</div>

                        <div class="type-levels-free">

                            <div className="level-beginner-free">
                                <input type="radio" />
                                <p>Iniciante</p>
                            </div>

                            <div class="level-intermediary-free">
                                <input type="radio" />
                                <p>Intermediário</p>
                            </div>

                            <div class="level-advanced-free">
                                <input type="radio" />
                                <p>Avançado</p>
                            </div>

                        </div>

                        <div class="button-registration-habilit-free">
                            <button>Cadastrar habiliade</button>
                        </div>

                        <div class="habilits-with-level-free">
                            <div class="habiit-content-free">
                            <span class="habilit-level-free">Java(Iniciante)</span>
                            </div>
                        </div>

                        <div class="description-project-free">
                            <p>Descreva seus conhecimentos</p>
                            <div class="description-free">
                                <textarea></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            
            
                <div class="info-user-freelancer">
                    <div class="info-user-freelancer-content">
                        <h1>Olá, Pedro!</h1>
                        <p>Conte-nos um pouco mais sobre os projetos que você possui</p>
                    </div>

                    <div class="btn-freelancer">
                        <button>Freelancer</button>
                    </div>

                    <div class="btn-cadastrar-free">
                        <button>Cadastrar</button>
                    </div>    
                </div>



            </div>

        </div>
    )
}


export default HabilitsHabilit;