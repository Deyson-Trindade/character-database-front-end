import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';





const FormCharacter = () => {

  let history = useHistory()


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
      console.log({
        nome,
        race,
        gender,
        classe
      })
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
    <div class="col-md-6">


      <Form
        onSubmit={e => {
          e.preventDefault()
          postData()

        }}>
        <div style={{ margin: '20px' }}>
          <Label></Label>
          <Input
            value={nome}
            onChange={e => setNome(e.target.value)}
            type="text"
            name="nome"
            id="nome"
            size="small"
            margin="normal"
            placeholder="Nome do personagem"
            required />
        </div>
        <div class="col-md-4">
          <select
            style={{ margin: '20px' }}
            class="form-select"
            value={race}
            onChange={e => {
              console.log(e.target.value)
              setRace(e.target.value)
            }
            } >
            {
              racas
            }
          </select>
          <select
            style={{ marginLeft: '20px' }}
            class="form-select"
            value={gender}
            placeholder="Gênero do personagem"
            onChange={e => {
              console.log(e.target.value)
              setGender(e.target.value)
            }}
          >
            {
              generos
            }
          </select>
          <select
            style={{ margin: '20px' }}
            class="form-select"
            value={classe}
            onChange={e => {
              console.log(e.target.value)
              setClasse(e.target.value)
            }}>
            {
              classes
            }
          </select>
        </div>
        <FormGroup style={{ marginTop: '20px', marginLeft: '20px' }}>
          <Label for="exampleText">Background</Label>
          <Input
            type="textarea"
            name="text"
            id="background" />
        </FormGroup>
        <FormGroup>
          <Button style={{ marginTop: '20px', marginLeft: '20px' }} color="dark" onClick={ () => history.push("/created")}>Salvar personagem</Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default FormCharacter;