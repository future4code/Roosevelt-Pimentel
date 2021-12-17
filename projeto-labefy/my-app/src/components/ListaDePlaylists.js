import React from "react"

export default class ListaDePlaylist extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.irParaCriarPlaylist}>Ir criar nova Playlist</button>
                <h2>ListaDePlaylist</h2>
            </div>
        )
    }
}