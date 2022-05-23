import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import FindrInput from "../components/findr-input";
import "../styles/findr-cadastro-style.css"


function Cadastro() {
    return (
        <>


            <div class="ajuste-tela">
            <h1>Findr</h1>
                <div class="imagem-cadastro">
                </div>
                <div className='card-cadastro'>
                    <div className='frases-cadastro'>
                        Crie sua conta de freelancer e encontre projetos de <br /> forma rápida e prática
                        <div class="formulario-cadastro">
                            <div class="input-cadastro">
                                <FindrInput tooltip="1" />
                            </div>
                            <div class="input-cadastro">
                                <FindrInput tooltip="2" />
                            </div>
                            <div class="input-cadastro">
                                <FindrInput tooltip="3" />
                            </div>
                            <div class="input-cadastro">
                                <FindrInput tooltip="4" />
                            </div>
                            <div class="input-cadastro">
                                <FindrInput tooltip="5" />
                            </div>
                            <div class="input-cadastro">
                                <FindrInput tooltip="6" />
                            </div>
                            <div class="input-cadastro">
                                <FindrInput tooltip="7" />
                            </div>
                            <div class="input-cadastro">
                                <FindrInput tooltip="8" />
                            </div>
                            <div class="input-cadastro">
                                <FindrInput tooltip="9" />
                            </div>

                        </div>
                        <div class="check-box">
                            <Checkbox inputId="cb1" value="New York"></Checkbox>
                            <label htmlFor="cb1" class="p-checkbox-label"> Eu aceito os <a href="">termos</a> de uso</label>
                        </div>
                        <button>Cadastrar</button>
                        <p>Já tem conta? Faça o login <a href="">aqui</a></p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Cadastro;