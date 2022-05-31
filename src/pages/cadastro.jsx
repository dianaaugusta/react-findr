import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import FindrInput from "../components/findr-input";
import FindrButton from '../components/findr-button';
import { Link, Navigate } from 'react-router-dom'
import "../styles/findr-cadastro-style.css"
import { axios } from 'axios';
import api from '../api';
import CadastroFreelancerRequest from './models/CadastroFreelancerRequest';
import { Button } from 'antd';

function postUser(){
    let inputName = document.getElementById("name");
    let inputEmail = document.getElementById("email");
    let inputPassword = document.getElementById("password")
    let inputCpf = document.getElementById("cpf")
    let inputCnpj = "null"
    let inputPhoneContact = document.getElementById("telefone")
    let inputEstado = document.getElementById("estado")
    let inputCidade = document.getElementById("cidade")
    let inputNacionalidade = document.getElementById("nacionalidade")
    let inputTempo = document.getElementById("tempo_disponivel")
    let inputPlano = document.getElementById("plano")


    let user = new CadastroFreelancerRequest(inputName.value, inputEmail, inputPassword, inputCpf, inputCnpj, inputPhoneContact, inputEstado, inputCidade, inputNacionalidade, inputTempo, inputPlano );

    api.post("freelancer".value, user).then((resposta) => {
        console.log(resposta)
        if (resposta.status === 201) {
            alert("Logado")
            Navigate('/login')
            
        }
        else{
            alert("falhou")
        }
    })
}


function Cadastro() {

    return (
        <>
            <div class="ajuste-tela">
                <div className="container-content-form">
                    <img src="https://images.pexels.com/photos/3201585/pexels-photo-3201585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="text-input">
                        <p>Crie sua conta de freelancer e encontre projetos de forma rápida e prática</p>
                    </div>

                    <div className="container-inputs">
                        <div class="individual-input-cadastro">
                            <p>Nome:</p>
                            <FindrInput id="name"/>
                        </div>
                        <div class="individual-input-cadastro">
                            <p>CPF:</p>
                            <FindrInput id="cpf" />
                        </div>
                        <div class="individual-input-cadastro">
                            <p>E-mail:</p>
                            <FindrInput id="email" />
                        </div>
                        <div class="individual-input-cadastro">
                            <p>Telefone:</p>
                            <FindrInput id="telefone" />
                        </div>
                        <div class="individual-input-cadastro">
                            <p>Senha:</p>
                            <FindrInput id="password" />
                        </div>
                        <div class="individual-input-cadastro">
                            <p>Confirmar senha:</p>
                            <FindrInput id="confirm-senha" />
                        </div>
                        <div class="individual-input-cadastro">
                            <p>Estado:</p>
                            <FindrInput id="estado" />
                        </div>
                        <div class="individual-input-cadastro">
                            <p>Cidade</p>
                            <FindrInput id="cidade" />
                        </div>
                        <div class="individual-input-cadastro">
                            <p>Nacionalidade</p>
                            <FindrInput id="nacionalidade" />
                        </div>
                        <div class="individual-input-cadastro">
                            <p>Tempo disponível:</p>
                            <FindrInput id="tempo_disponivel" />
                        </div>
                        <div class="individual-input-cadastro">
                            <p>Plano:</p>
                            <FindrInput id="plano" />
                        </div>
                        <br />
                        <div className="text-acceptance">
                            <h3 className='i-acceptance'> <input type="checkbox" id="checkbox-accept" /> Eu aceito os termos de uso</h3>
                            <Button onClick={() => postUser()}>Click Me</Button>
                            <h4 className='login-here'>Já tem conta? Faça o login <a href="#">aqui</a> </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cadastro;