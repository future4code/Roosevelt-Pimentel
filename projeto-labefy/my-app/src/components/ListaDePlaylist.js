import React, { useReducer } from "react"
import axios from "axios"
import styled from "styled-components"

const CardMusica = styled.div`
     border: 1px solid black; 
     padding: 10px;
     margin: 10px;
     width: 300px;
     display: flex;
     justify-content: space-between;
     
`

export default class ListaDePlaylist extends React.Component {
    state = {
        Playlist: []
    }
    componentDidMount() {
        this.pegaPlaylist()
    }
    pegaPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "roosevelt-andrade-joy"
            }
        })
            .then((res) => {
                this.setState({ Playlist: res.data.result.list })
            })
            .catch((err) => {
                console.log(err)
                alert("Ocorreu um erro ao carregar as Playlists")
            })
    }

    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "roosevelt-andrade-joy"
            }

        })
            .then((res) => {
                alert("Playlist deletada com sucesso!")
                this.pegaPlaylist()
            })
            .catch((err) => {
                alert("Ocorreu um erro! Tente novamente")
            })
    }

    render() {
        const lista = this.state.Playlist.map((Playlist) => {
            return (<CardMusica key={Playlist.id}>
                {Playlist.name}
                <button onClick={() => this.deletarPlaylist(Playlist.id)}>X</button>
            </CardMusica>
            )
        })
        return (
            <div>
                <button onClick={this.props.irParaCriarPlaylist}>Ir criar nova Playlist</button>
                <h2>ListaDePlaylist</h2>
                {lista}
            </div>
        )
    }
}