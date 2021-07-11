import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'reactstrap'

const Created = () => {

    let history = useHistory()

    function handleHistory() {
        history.push("/cadastrar")
    }

    return (

        <div style={{padding: '150px'}}>
            <h3 style={{ textAlign: 'center' }}>Personagem salvo com sucesso!</h3>
            <Button style={{ marginTop: '20px', marginLeft: '450px' }} color="dark" onClick={handleHistory}>Criar mais um </Button>

        </div>


    )
}

export default Created