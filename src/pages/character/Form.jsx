import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';





const FormCharacter = () => {

  let history = useHistory()

  const handleHistory = () => {
    history.push("/created")
  }


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
      setRace(body.racas[0].chave)
      setGender(body.generos[0].chave)
      setClasse(body.classes[0].chave)
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
    handleHistory()
  }



  return (
    <div className="container">
      <Form
        onSubmit={e => {
          e.preventDefault()
          postData()

        }}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Nome">Nome</Label>
              <Input
                value={nome}
                onChange={e => setNome(e.target.value)}
                type="text"
                name="Nome"
                id="Nome"
                bsSize="small"
                placeholder="Nome do personagem"
                required />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Escolha a raça</Label>
              <select
                value={race}
                className="form-select"
                onChange={e => {
                  console.log(e.target.value)
                  setRace(e.target.value)
                }
                } >
                {
                  racas
                }
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Escolha o gênero</Label>
              <select
                value={gender}
                className="form-select"
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
            </FormGroup>
          </Col>
        </Row>


        <Row>
          <Col md={6}>
            <FormGroup>
            <Label for="classe">Escolha a classe</Label>
              <select
                className="form-select"
                id="classe"
                value={classe}
                onChange={e => {
                  console.log(e.target.value)
                  setClasse(e.target.value)
                }}>
                {
                  classes
                }
              </select>
            </FormGroup>
          </Col>
        </Row>
        


        <FormGroup>
          <Label >Background</Label>
          <Input
            type="textarea"
            name="text"
            id="background" />
        </FormGroup>
        <FormGroup>
          <Button style={{ marginTop: '20px', marginLeft: '20px' }} color="dark" >Salvar personagem</Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default FormCharacter;