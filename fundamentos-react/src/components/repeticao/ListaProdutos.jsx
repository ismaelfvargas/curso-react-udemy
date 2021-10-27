import React from 'react'
import produtos from "../../data/produtos";
import './ListaProdutos.css'

export default (props) => {

    function getListaP() {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={ i % 2 === 0 ? 'Par' : 'Impar' }>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }

    return (
        <div className="ListaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                        {getListaP()}
                </tbody>
            </table>
        </div>
    )
}