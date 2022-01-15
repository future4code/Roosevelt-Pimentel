import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Cabeca from "./cabeca";

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
`

const Botoes = styled.div`
width: 100% ;
appearance: auto;
text-rendering: auto;
color: -internal-light-dark(black, white);
letter-spacing: normal;
word-spacing: normal;
line-height: normal;
text-transform: none;
text-indent: 0px;
text-shadow: none;
display: inline-block;
text-align: center;
align-items: flex-start;
cursor: pointer;
box-sizing: border-box;
background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
margin: 0em;
padding: 1px 6px;
border-width: 2px;
border-style: outset;
border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
border-image: initial;
`
const EstilizacaoBotao = styled.div`
    display: flex;
    justify-content: space-evenly;
    -webkit-box-align: center;
    align-items: center;
    padding: 10px 0px;
`


function Match() {
  const [usuario, setUsuario] = useState({});
  const [listaMatch, setListMatch] = useState([]);

  const pegaFotos = async () => {
    await axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Roosevelt-Andrade/person`
      )
      .then((response) => {
        setUsuario(response.data.profile);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    pegaFotos();
  }, []);

  const gostei = (choice) => {
    const body = {
      id: `${usuario.id}`,
      choice: choice
    }

    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Roosevelt-Andrade/choose-person", body)
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
      <Botoes>
        <p>{usuario.bio}</p>
        <p>{usuario.name}  {usuario.age} </p>
        <EstilizacaoBotao>
        <button onClick={() => gostei(true)}>Match</button>
        <button onClick={() => gostei(true)}>X</button>
        </EstilizacaoBotao>
      </Botoes>

    </Box>
  );
}


export default Match;