import React from "react";
import CriarPlaylist from "./components/CriarPlaylist";
import ListaDePlaylist from "./components/ListaDePlaylist";


export default class App extends React.Component {
  state = {
    telaAtual: "ListaDePlaylist"
  }
  
  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "CriarPlaylist":
        return <CriarPlaylist irParaListaDePlaylist={this.irParaListaDePlaylist} />
      case "ListaDePlaylist":
        return <ListaDePlaylist irParaCriarPlaylist={this.irParaCriarPlaylist} />
      default:
        return <div> Erro! Músicas não identificada.</div>
    }
  }

  irParaCriarPlaylist = () => {
    this.setState({ telaAtual: "CriarPlaylist" })
  }

  irParaListaDePlaylist = () => {
    this.setState({ telaAtual: "ListaDePlaylist" })
  }

  render() {
    return (
      <div>
        {this.escolheTela()}
      </div>
    );
  }
}

