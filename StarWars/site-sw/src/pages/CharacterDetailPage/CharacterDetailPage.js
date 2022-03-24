import axios from "axios";
import React, { useState, useEffect } from "react";

function CharacterDetailPage(props) {

  const [profile, setProfile] = useState({})
  const [planets, setPlanets] = useState({})

  const getProfile = () => {
    axios.get(props.url)
      .then((res) => {
        setProfile(res.data)
      })
      .catch((err) => {
        console.log(err)
        alert("Ocorreu um erro ao carregar os detalhes")
      })
  }

  const getPlanets = () => {
    const id = "https://swapi.py4e.com/api/planets/"
    axios.get(props.url)
      .then((res) => {
        setPlanets(res.data)
      })
      .catch((err) => {
        console.log(err)
        alert("Ocorreu um erro ao carregar os detalhes")
      })
  }

  useEffect(() => {
    getProfile()
  }, [])
  
  useEffect(() => {
    getPlanets()
  }, [])

  return (
    <div>
      <h1> Detalhes do Personagem </h1>
      <p>Nome: {profile.name} </p>
      <p>Planeta de origem: {planets.name} {}</p>
      <button onClick={() => props.goToPage("Lista")}>Voltar para lista de personagens</button>
    </div>
  );

}



export default CharacterDetailPage