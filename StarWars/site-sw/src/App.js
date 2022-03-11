import React, { useState, useEffect } from "react";
import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage"

function App() {

  const [character, setCharacter] = useState("")
  const [currentPage, setCurrentPage] = useState("Lista")

  const selectPage = () => {
    switch (currentPage) {
      case "Lista":
        return <CharacterListPage goToDetailsPage={goToDetailsPage}/>;
      case "Detalhe":
        return <CharacterDetailPage goToPage={goToPage} url={character}/>;
      default:
        return <div> Erro! Nada encontrado.</div>
    };
  }

  const goToPage = (nomeTela) => {
    setCurrentPage(nomeTela);
  }

  const goToDetailsPage = (url) => {
    setCharacter(url)
    setCurrentPage("Detalhe")
  }

  return (
    <div>
      {selectPage()}
    </div>
  )
}

export default App;

