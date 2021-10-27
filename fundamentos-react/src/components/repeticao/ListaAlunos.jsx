import react from 'react'
import alunos from "../../data/alunos";

export default (props) => {

    const listaA = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} -> {aluno.nota}
            </li>
        )
    })

    return (
        <div>
            <ul>
                <li style={{ listStyle: "none" }}>{listaA}</li>
            </ul>
        </div>
    )
}