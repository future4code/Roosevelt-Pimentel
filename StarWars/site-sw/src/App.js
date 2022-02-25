import React, { useState } from "react";
import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage"

function App() {

  const [currentPage, setCurrentPage] = useState("Lista")

  const selectPage = () => {
    switch (currentPage) {
      case "Lista":
        return <CharacterListPage goToPage={goToPage}/>;
      case "Detalhe":
        return <CharacterDetailPage goToPage={goToPage} />;
      default:
        return <div> Erro! Nada encontrado.</div>
    };
  }

  const goToPage = (nomeTela) => {
    setCurrentPage(nomeTela);
  }

  return (
    <div>
      {selectPage()}
    </div>
  )

}

export default App;

