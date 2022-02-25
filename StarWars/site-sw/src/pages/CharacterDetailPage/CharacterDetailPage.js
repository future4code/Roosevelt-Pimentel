import React from "react"

export default class CharacterDetailPage extends React.Component {
  render() {
    return (
      <div>
        <h1> CharacterListPage </h1>
        <button onClick={() => this.props.goToPage("Lista")}>ListPage</button>
      </div>
    );
  }
}



