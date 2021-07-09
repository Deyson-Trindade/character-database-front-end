import React from 'react'
import { useHistory } from 'react-router'
import { Button } from 'reactstrap'

const Created = () => {

    let history = useHistory()

    function handleHistory() {
        history.push("/cadastrar")
    }

    return(

        <div>
            <h3>Personagem salvo com sucesso!</h3>
            <Button style={{ marginTop: '20px', marginLeft: '20px' }} color="dark" onClick={handleHistory}>Salvar outro </Button>

        </div>


    )
}

export default Created