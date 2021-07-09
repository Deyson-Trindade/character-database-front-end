import { Button, Table } from 'reactstrap';
import React, { useEffect, useState } from 'react'



const Lista = () => {
    const [personagens, setPersonagem] = useState([])

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
            .then(res => res.json())
            .then(() => setPersonagem(personagens.filter(e => e.ID !== id)))

    }


    return (
        <body>
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
                    {personagens.map((personagem) => <tr key="
                        {personagem.nome}
                        {personagem.nome} -
                        {personagem.raca} -
                        {personagem.genero} -
                        {personagem.classe}">
                        <td>{personagem.nome}</td>
                        <td>{personagem.genero}</td>
                        <td>{personagem.classe}</td>
                        <td>{personagem.raca}</td>
                        <td >
                            <Button style={{ marginTop: '20px', marginLeft: '20px' }} color="dark">Alterar</Button>
                            <Button style={{ marginTop: '20px', marginLeft: '20px' }} color="dark" onClick={() => deletar(personagem.ID)}>Deletar</Button>
                        </td>
                    </tr>)}
                </tbody>
            </Table>
        </body>
    )
}
export default Lista