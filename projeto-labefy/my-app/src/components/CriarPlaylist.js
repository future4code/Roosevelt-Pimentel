import React from "react"
import axios from "axios"
export default class CriarPlaylist extends React.Component {
    state = {
        nome: ""
    }

    handleNome = (e) => {
        this.setState({ nome: e.target.value })
    }
    criarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nome,
        }
        axios.post(url, body, {
            headers: {
                Authorization: "roosevelt-andrade-joy"
            }
        })
            .then((res) => {
                alert("Playlist adicionada com sucesso!")
                this.setState({nome: ""})
            })

            .catch((err) => { 
                alert(err.res.data.message)

            })
    }

    render() {
        return (
            <div>
                <button onClick={this.props.irParaListaDePlaylist}>Ir Para Lista de Playlist</button>
                <h2>CriarPlaylist</h2>
                <input
                    placeholder="Nome"
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                <button onClick={this.criarPlaylist}>Criar Playlist</button>
            </div>
        )
    }
}