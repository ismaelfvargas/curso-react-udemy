import React from 'react'
import "./App.css"

import Primeiro from "./Primeiro";
import ComParametro from "./ComParametro";
import NumAleatorioo from "./NumAleatorioo";
import Card from "../layout/Card";
import Familia from "./Familia";
import FamiliaMembro from "./FamiliaMembro";
import ListaAlunos from "../repeticao/ListaAlunos";
import ListaProdutos from "../repeticao/ListaProdutos";
import ParOuImpar from "../condicional/ParOuImpar";
import UsuarioInfo from "../condicional/UsuarioInfo";

export default () => {
    return (
        <div className="App">
            <h2>Fundamentos de React</h2>

            <div className="Cards">

                <Card titulo = "#01 Card" color="#FA6900">
                    <NumAleatorioo min = {10} max = {20} />
                </Card>

                <Card titulo="#02 Componente" color="#E94C6F">
                    <Primeiro></Primeiro>
                </Card>

                <Card titulo="#03 Parâmetro Notas" color="#E8B71A">
                    <ComParametro
                        titulo = 'Situação do Aluno'
                        aluno = 'Pedro Silva'
                        nota = {Math.floor(Math.random() * 10)}
                    />
                </Card>

                <Card titulo = "#04 Componente com Filhos" color="#00C8F8">
                    <Familia sobrenome = 'de Pacas'>
                        <FamiliaMembro nome="Pedro"/>
                        <FamiliaMembro nome="Ismael"/>
                        <FamiliaMembro nome="João"/>
                    </Familia>
                </Card>

                <Card titulo = "#05 Repetição" color="#FF4C65">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo = "#06 Desafio Repetição" color="#40E0D0">
                    <ListaProdutos></ListaProdutos>
                </Card>

                <Card titulo = "#07 Renderização Condicional" color="#FFE4C4">
                    <ParOuImpar numero={22}></ParOuImpar>
                    <UsuarioInfo usuario={{ nome: 'Ismael' }} />
                    <UsuarioInfo usuario={{ email: 'TESTEEE' }} />
                </Card>

            </div>
        </div>
    )
}