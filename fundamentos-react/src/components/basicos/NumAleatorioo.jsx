import React from 'react'

export default (props) => {
    const {min, max} = props
    const aleatorio = Math.floor(parseFloat(Math.random() * (max - min) + min))
    return (
        <>
            <p>O valor minimo é: <strong> { min } </strong></p>
            <p>O valor maximo é: <strong> { max } </strong></p>
            <p>O valor Aleatório é: <strong> { aleatorio } </strong></p>
        </>
    )
}