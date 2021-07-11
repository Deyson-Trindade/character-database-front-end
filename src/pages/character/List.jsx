import { Button, Table } from 'reactstrap';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';



const Lista = () => {
    const [personagens, setPersonagem] = useState([])
    let history = useHistory()


    const alterarPersonagem = (id) => {
        history.push({
            pathname: `/alterar`,
            state: { id }
        })
    }

    useEffect(() => {
        fetch('http://localhost:3003/dominios/personagem', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setPersonagem(data))
    }, [JSON.stringify(personagens)])



    const deletar = (id) => {
        fetch(`http://localhost:3003/dominios/personagem/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(() => setPersonagem(personagens.filter(e => e.ID !== id)))

    }

    return (
            <Table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Genero</th>
                        <th>Classe</th>
                        <th>Raça</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {personagens.map((personagem) => <tr key={JSON.stringify(personagem)} >
                        <td>{personagem.nome}</td>
                        <td>{personagem.genero}</td>
                        <td>{personagem.classe}</td>
                        <td>{personagem.raca}</td>
                        <td >
                            <Button style={{ marginRight: '20px' }} color="dark" onClick={() => alterarPersonagem(personagem.ID)}>Alterar</Button>
                            <Button color="dark" onClick={() => deletar(personagem.ID)}>Deletar</Button>
                        </td>
                    </tr>)}
                </tbody>
            </Table>
    )
}
export default Lista