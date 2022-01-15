import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import cabeca from "./cabeca";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 420px;
  height: 80vh;
  border: 1px solid black;
  border-radius: 5px;
`;


const Box2 = styled.div`
overflow: hidden;
width: 400px;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
margin: 0px;
font-family: Roboto, sans-serif;
`
const Button1 = styled.div`

`

const Posicao = styled.div`
display: flex;
justify-content: space-evenly;
-webkit-box-align: center;
align-items: center;
padding: 10px 0px;
box-sizing: border-box;
`


function Match() {
  const [usuario, setUsuario] = useState({});
  const [listaMatch, setListMatch] = useState([]);

  const pegaFotos = async () => {
    await axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Roosevelt/person`
      )
      .then((response) => {
        setUsuario(response.data.profile);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const listaDeMatachs = async () => {
    await axios
    .get(
      `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches`
    )
    .then((response) => {
      setListMatch(response.data.profile);
    })
    .catch((error) => {
      alert(error);
    });
  };

  useEffect(() => {
    pegaFotos();
  }, []);
  
  useEffect(() => {
    listaDeMatachs();
  }, []);
  
  const gostei = (choice) => {
    const body = {
      id: `${usuario.id}`,
      choice: true
    }

    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Roosevelt-Andrade/person", body)
      .then((res) => {
        pegaFotos()
      }).catch(error => {
        alert("erro")
      })
  }

  return (
    <Box>
      <Box2>
        <img src={usuario.photo} />
      </Box2>
      <p>{usuario.bio}</p>
      <p>{usuario.name}  {usuario.age} </p>
      <Posicao>
        <Button1>
        <button onClick={() => gostei(true)}>Dar Match</button>
        </Button1>
      <button onClick={() => gostei(true)}>X</button>
      <button onClick={() => listaMatch()}>Matchs</button>
      </Posicao>

    </Box>
    
  );
}


export default Match;