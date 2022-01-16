import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Cabeca from "./Cabeca";

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

const Posicao = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
-webkit-box-align: center;
align-items: center;
padding: 10px 0px;
box-sizing: border-box;
`
const Button1 = styled.button`
border-radius: 50%;
width: 80px;
height: 80px;
border: solid 1px;

font-size: 40px;

&:hover{
  background-color: greenyellow;
  color: green;
  transition: all 0.5s;
}
`
const Button2 = styled.button`
border-radius: 50%;
width: 80px;
height: 80px;
border: solid 1px;

font-size: 30px;

&:hover{
  background-color: red;
  transition: all 0.5s;
}
`
const Button3 = styled.button`
border-radius: 50%;
width: 80px;
height: 80px;
border: solid 1px;

font-size: 30px;

&:hover{
  background-color: yellow;
  transition: all 0.5s;
}
`

function Match(props) {
  const [usuario, setUsuario] = useState({});
  const [listaMatch, setListMatch] = useState([]);

  const pegaFotos = async () => {
    await axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Andrade/person`
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

  const like = async () => {
    let Url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Andrade/choose-person`
    let header = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    let body = {
      "id": `${usuario.id}`,
      "choice": true
    }
    let requisicao = await axios.post(Url, body, header)
    try {
      pegaFotos()
    } catch (error) {
      console.log(error)

    }
  }



  // axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Roosevelt/person", body)
  //   .then((res) => {
  //     pegaFotos()
  //   }).catch(error => {
  //     alert("erro")
  //   })


  return (
    <Box>
      <Box2>
        <img src={usuario.photo} />
      </Box2>
      <p>{usuario.bio}</p>
      <p>{usuario.name}  {usuario.age} </p>
      <Posicao>
        <Button1 onClick={like}> ❤</Button1>
        <Button2 onClick={pegaFotos}>❌</Button2>
      </Posicao>

    </Box>

  );
}


export default Match;