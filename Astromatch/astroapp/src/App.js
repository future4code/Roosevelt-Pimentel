import './App.css';
import React,{useEffect , useState}from "react"; 
import styled from "styled-components";
import Cabeca from './components/Cabeca';
import Match from './components/match';
import ListaMatch from './components/listaMatch';

const Container = styled.div`
margin: 20px 35vw;
display: flex; 
flex-direction: column;
justify-content: space-between;
height: 90vh;
width:420px;
`

function App() {
  const [telaAtual, setTelaAtual] = useState("lista")

  const mudaTela= () => {
    if(telaAtual === "perfil"){
      return <Match renderizaTela={renderizaTela}/> 
    } else {
      return <ListaMatch/>
    }
  }
const renderizaTela = () => {
telaAtual === "perfil"?
setTelaAtual("list"): setTelaAtual("perfil")
}
  return (
    <Container>
      <Cabeca renderizaTela = {renderizaTela}/>
      {mudaTela()}
    </Container>
  );
}

export default App;

