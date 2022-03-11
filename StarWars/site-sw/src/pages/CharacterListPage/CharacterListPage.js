import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContainerButton} from "./styled"


function CharacterListPage(props) {
  const [list, setList] = useState([])

  const getCharacterList = () => {
    const url = "https://swapi.py4e.com/api/people/"
    axios.get(url)
      .then((res) => {
        setList(res.data.results)
      })
      .catch((err) => {
        console.log(err)
        alert("Ocorreu um erro ao carregar a Lista")
      })
  }

  useEffect(() => {
    getCharacterList()
  }, [])


  const lista = list.length && list.map((character) => {
    return (
      <div >
        <ContainerButton key={character.name} onClick={() => props.goToDetailsPage(character.url)}>{character.name}</ContainerButton>
      </div>
    )
  })

  return (
    <div>
      <h1> Lista de personagens</h1>
      {lista}
    </div>
  )

}

export default CharacterListPage





