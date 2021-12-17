import React from "react";
import CriarPlaylist from "./components/CriarPlaylist";
import ListaDePlaylist from "./components/ListaDePlaylists";


export default class App extends React.Component {
  state = {
    telaAtual: "CriarPlaylist"
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "CriarPlaylist":
        return <CriarPlaylist irParaCriarPlaylist={this.irParaCriarPlaylist} />
      case "ListaDePlayList":
        return <ListaDePlaylist irParaListaDePlaylist={this.irParaListaDePlaylist} />
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

