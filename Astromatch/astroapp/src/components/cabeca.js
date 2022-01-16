import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Logo from "./imagens/titulo.jpeg";
import lista from "./imagens/lista.jpeg";


const Imagem = styled.img`
  width: 200px;
  margin-left: 100px;
    
`;
const Carinhas = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const CardContainer = styled.div`
display: flex;
width: 100%;
height: 100px;
border: 1px solid;
justify-content: space-between;
align-items: center;
`
function Cabeca(props) {
  return (
    <CardContainer>
      <Imagem src={Logo}/>
      <Carinhas onClick={props.renderizaTela} src={lista}/>
    </CardContainer>
  );
}

export default Cabeca;