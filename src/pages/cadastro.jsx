import FindrInput from "../components/findr-input";
import "../styles/findr-cadastro-style.css"
import api from '../api';
import React, { useState } from 'react';


function Cadastro() {

    const [nameInput, setNameInput] = useState("");
    const [cpfInput, setCpfInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [telefoneInput, setTelefoneInput] = useState("");
    const [senhaInput, setSenhaInput] = useState("");
    const [nacionalidadeInput, setNacionalidadeInput] = useState("");
    const [estadoInput, setEstadoInput] = useState("");
    const [cidadeInput, setCidadeInput] = useState("");
    const [tempoInput, setTempoInput] = useState("");
    const [planoInput, setPlanoInput] = useState("");

    function postUser(e) {
        e.preventDefault();

        const objFreelancer = {
            idUserFreelancer: "",
            avaliableTime: tempoInput,
            fkPlanFreelancer: {
                idPlan: planoInput,
                planType: "",
                quantityClicks: ""
            },
            name: nameInput,
            email: emailInput,
            password: senhaInput,
            cpf: cpfInput,
            cnpj: cpfInput,
            phoneContact: telefoneInput,
            country: nacionalidadeInput,
            state: estadoInput,
            city: cidadeInput
        }
        console.log(cpfInput.value, emailInput.value)

        api.post("freelancer", objFreelancer).then(res => {
            alert("cadastrado com sucesso!");
        }).catch(erro => {
            alert("deu ruim!");
            console.log(objFreelancer)
            console.log(erro);
        })
    }

    return (
        <>
            <div class="ajuste-tela">
                <div className="container-content-form">
                    <img src="https://images.pexels.com/photos/3201585/pexels-photo-3201585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="text-input">
                        <p>Crie sua conta de freelancer e encontre projetos de forma rápida e prática</p>
                    </div>
                    <div className="container-inputs">
                        <form onSubmit={postUser}>
                            <div class="individual-input-cadastro">
                                <p>Nome:</p>
                                <FindrInput value={nameInput} onChange={e => setNameInput(e.target.value)} />
                            </div>
                            <div class="individual-input-cadastro">
                                <p>CPF:</p>
                                <FindrInput value={cpfInput} onChange={e => setCpfInput(e.target.value)} />
                            </div>
                            <div class="individual-input-cadastro">
                                <p>E-mail:</p>
                                <FindrInput value={emailInput} onChange={e => setEmailInput(e.target.value)} />
                            </div>
                            <div class="individual-input-cadastro">
                                <p>Telefone:</p>
                                <FindrInput value={telefoneInput} onChange={e => setTelefoneInput(e.target.value)} />
                            </div>
                            <div class="individual-input-cadastro">
                                <p>Senha:</p>
                                <FindrInput value={senhaInput} onChange={e => setSenhaInput(e.target.value)} />
                            </div>
                            <div class="individual-input-cadastro">
                                <p>Confirmar senha:</p>
                                <FindrInput />
                            </div>
                            <div class="individual-input-cadastro">
                                <p>Nacionalidade</p>
                                <FindrInput value={nacionalidadeInput} onChange={e => setNacionalidadeInput(e.target.value)} />
                            </div>
                            <div class="individual-input-cadastro">
                                <p>Estado:</p>
                                <FindrInput value={estadoInput} onChange={e => setEstadoInput(e.target.value)} />
                            </div>
                            <div class="individual-input-cadastro">
                                <p>Cidade</p>
                                <FindrInput value={cidadeInput} onChange={e => setCidadeInput(e.target.value)} />
                            </div>
                            <div class="individual-input-cadastro">
                                <p>Tempo disponível:</p>
                                <FindrInput value={tempoInput} onChange={e => setTempoInput(e.target.value)} />
                            </div>
                            <div class="individual-input-cadastro">
                                <p>Plano:</p>
                                <FindrInput value={planoInput} onChange={e => setPlanoInput(e.target.value)} />
                            </div>
                            <br />
                            <div className="text-acceptance">
                                <h3 className='i-acceptance'> <input type="checkbox" id="checkbox-accept" /> Eu aceito os termos de uso</h3>
                                <button type='submit'>Click Me</button>
                                <h4 className='login-here'>Já tem conta? Faça o login <a href="#">aqui</a> </h4>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cadastro;