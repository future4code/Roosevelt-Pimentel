import axios from "axios";
import React, { useState ,useEffect } from "react"


function goToDetailsPage(props) {

  const [details, setDetails] = useState([])

  const detailsUrl = () => {
    const url = "https://swapi.py4e.com/api/people/"
    axios.get(url)
      .then((res) => {
        setList(res.data.results)
        console.log(res.data.results)
      })
      .catch((err) => {
        console.log(err)
        alert("Ocorreu um erro ao carregar a Lista")
      })
  }


  useEffect(() => {
    detailsUrl()
  }, [])

  const Detalhe = details.length && details.map((character) => {
    return (
      <p>{character.name}</p>
    )
  })


  return (
    <div>
      <h1> CharacterDetailPage </h1>
      {Detalhe}
      <button onClick={() => props.goToPage("Lista")}>ListPage</button>
    </div>
  )

}
export default goToDetailsPage

