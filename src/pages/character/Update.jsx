import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FormGroup, Form, Button, Label, Input } from 'reactstrap'



const Update = () => {

  const [personagem, setPersonagem] = useState({
    nome: '',
    racaID: '',
    generoID: '',
    classeID: ''
  })
  const [generos, setGeneros] = useState()
  const [racas, setRacas] = useState([])
  const [classes, setClasses] = useState([])

  let location = useLocation()

  useEffect(() => {

    async function fetchData() {

      const resp = await fetch('http://localhost:3003/dominios')
      const body = await resp.json()
      setGeneros(body.generos.map(genero => <option value={genero.chave} key={genero.chave} >{genero.descricao}</option>))
      setRacas(body.racas.map(raca => <option value={raca.chave} key={raca.chave} >{raca.descricao}</option>))
      setClasses(body.classes.map(classe => <option value={classe.chave} key={classe.chave} >{classe.descricao}</option>))
    }

    function getData() {
      fetch(`http://localhost:3003/personagem/${location.state.id}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
        .then(res => res.json())
        .then(personagem => {
          console.log(personagem)
          setPersonagem(personagem)
        })
    }



    fetchData()
    getData()

  }, [])


  function putData() {

    try {
      fetch(`http://localhost:3003/personagem/${location.state.id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(personagem)
      }).then(res => res.json()).then(res => console.log(res))
    } catch (erro) {
      console.log(erro)
    }
  }



  return (
    <div className="col-md-6">

      <p style={{ marginLeft: '150px' }}>Bem vindo à página de alteração.</p>

      <Form
        onSubmit={e => {
          e.preventDefault()
          putData()

        }}>
        <div style={{ margin: '20px' }}>
          <Label></Label>
          <Input
            value={personagem.nome}
            onChange={e => setPersonagem({ ...personagem, nome: e.target.value })}
            type="text"
            name="nome"
            id="nome"
            bsSize="small"
            margin="normal"
            placeholder="Nome do personagem"
            required />
        </div>
        <div className="col-md-4">
          <select
            style={{ margin: '20px' }}
            className="form-select"
            value={personagem.racaID}
            onChange={e => {
              setPersonagem({ ...personagem, racaID: e.target.value })
            }
            } >
            {
              racas
            }
          </select>
          <select
            style={{ marginLeft: '20px' }}
            className="form-select"
            value={personagem.generoID}
            placeholder="Gênero do personagem"
            onChange={e => {
              setPersonagem({ ...personagem, generoID: e.target.value })
            }}
          >
            {
              generos
            }
          </select>
          <select
            style={{ margin: '20px' }}
            className="form-select"
            value={personagem.classeID}
            onChange={e => {
              setPersonagem({ ...personagem, classeID: e.target.value })
            }}>
            {
              classes
            }
          </select>
        </div>
        <FormGroup style={{ marginTop: '20px', marginLeft: '20px' }}>
          <Label >Background</Label>
          <Input
            type="textarea"
            name="text"
            id="background" />
        </FormGroup>
        <FormGroup>
          <Button style={{ marginTop: '20px', marginLeft: '20px' }} color="dark" >Alterar personagem</Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default Update;