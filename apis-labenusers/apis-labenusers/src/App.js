import React from "react";
import axios from "axios"

export default class App extends React.Component {
  state = {
    getAllUsers: [],
    criarNome: "",
    criarEmail: ""
  }

  componentDidMount() {
    this.pegaUsuarios()
  }

  criaUsuarios = () => {
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "roosevelt-andrade-joy"
      }
    })
      .then((resp) => {
        this.setState({ createUsers: resp.data.name.email })
      })
      .catch((err) => {
        console.log(err.resp.data)
      })
  }
  pegaUsuarios = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "roosevelt-andrade-joy"
      }
    })
  }

  mudaNome= (e) => {
    this.setState({ criarNome: e.target.value })
  }

  mudaEmail = (e) => {
    this.setState({ criarEmail: e.target.value })
  }

  addUsuario = () => {
    const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.criarNome,
      email: this.state.criarEmail
    }
    const headers = {
      headers: {
        Authorization: "roosevelt-andrade-joy"
      }
    }
    axios.post(URL, body, headers)
      .then((response) => {
        console.log("usuario adicionado")
      })
      .catch((error) => {
        console.log(error.response.data)
      })
  }

  render() {
    const listaDeUsuarios = this.state.getAllUsers.map((getAllUser) => {
      return <p key={getAllUser.name}> {getAllUser.email}</p>;
    });

    return <div>
      <div className="App">
        <button onClick={this.getAllUser}
        >Trocar de tela
        </button>
      </div>
      <div>
        <input
          placeholder={"nome"}
          value={this.state.criarNome}
          onChange={this.mudaNome}
        />
        <input
          placeholder={"email"}
          value={this.state.criarEmail}
          onChange={this.mudaEmail}
        />
        <button onClick={this.addUsuario}
        >Adicionar Usuario
        </button>
      </div>
      {listaDeUsuarios}

    </div>

  }
}