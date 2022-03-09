import React, { useState, useEffect } from "react";
import axios from "axios";


function CharacterListPage(props) {

  const [list, setList] = useState([])

  const getCharacterList = () => {
    const url = "https://swapi.py4e.com/api/people/"
    axios.get(url)
      .then((res) => {
        setList(res.data.results)
        console.log(res.data.results)
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
    console.log(character)
    return (
      <button onClick={() => props.goToPage("Detalhe")}>{character.name}</button>
    )
  })


  return (
    <div>
      <h1> CharacterListPage </h1>
      {lista}
    </div>
  )

}

export default CharacterListPage





