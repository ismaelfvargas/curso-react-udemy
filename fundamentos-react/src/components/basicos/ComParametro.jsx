import React from 'react'

export default function (props) {
    const status = props.nota >= 7 ? 'APROVADO' : 'REPROVADO'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
               <strong>{ props.aluno } </strong>
                Tem nota:
                <strong> { props.nota } </strong>
                e foi:
                <strong> { status } </strong>
            </p>
        </div>
    )
}