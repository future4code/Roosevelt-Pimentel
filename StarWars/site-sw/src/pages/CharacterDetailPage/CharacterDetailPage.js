import axios from "axios";
import React, { useState, useEffect } from "react";

function CharacterDetailPage(props) {

  const [detail, setDetailsPage] = useState([])

  const goToDetailsPage = () => {
    const url = "https://swapi.py4e.com/api/people/1/"
    axios.get(url)
      .then((res) => {
        setDetailsPage(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
        alert("Ocorreu um erro ao carregar os detalhes")
      })
  }
  
  useEffect(() => {
    goToDetailsPage()
  }, [])
  
  return (
    <div>
      <button onClick={() => props.goToPage("Lista")}>Voltar para lista de personagens</button>
    </div>
  );
  
}



export default CharacterDetailPage