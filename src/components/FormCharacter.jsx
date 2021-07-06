import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';





const FormCharacter = () => {
  const [generos, setGeneros] = useState([])
  const [racas, setRacas] = useState([])
  const [classes, setClasses] = useState([])

  useEffect(() => {
      async function fetchData() {

          const resp = await fetch('http://localhost:3003/dominios')
          const body = await resp.json()
          setGeneros(body.generos.map(genero => <option value={genero.chave} key={genero.chave} >{genero.descricao}</option>))
          setRacas(body.racas.map(raca => <option value={raca.chave} key={raca.chave} >{raca.descricao}</option>))
          setClasses(body.classes.map(classe => <option value={classe.chave} key={classe.chave} >{classe.descricao}</option>))
      }

      fetchData()

  }, [])




  const [race, setRace] = useState('')
  const [gender, setGender] = useState('')
  const [classe, setClasse] = useState('')
  const [nome, setNome] = useState('')
  
  function postData() {

    try {
        fetch('http://localhost:3003/dominios', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome,
                race,
                gender,
                classe
            }
            )
        }).then(res => res.json()).then(res => console.log(res))
    } catch (erro) {
        console.log(erro)

    }
}


  return (
    <Form 
    style={{ padding: '15px' }}
    onSubmit={e => {
      e.preventDefault()
      postData()

  }}>
      <FormGroup>
        <Label></Label>
        <Input 
          type="text"
          name="nome"
          id="nome" 
          size="small"
          margin="normal"
          placeholder="Nome do personagem" 
          required/>
      </FormGroup>
      <FormGroup>
        <Input 
          type="select" 
          name="select" 
          id="genderSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Background</Label>
        <Input 
          type="textarea" 
          name="text" 
          id="background" />
      </FormGroup>
      <FormGroup>
      <Button style={{ marginTop: '10px' }} color="dark">Salvar personagem</Button>
    </FormGroup>
    </Form>
  );
}

export default FormCharacter;