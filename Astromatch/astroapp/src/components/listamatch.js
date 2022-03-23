import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Box2 = styled.div`
overflow: hidden;
width: 420px;
height: 100vh;
border: 1px solid;
overflow: auto;
p{
    margin-left: 10px;
    font-size: 19px;
}
`

const CardList = styled.div`
display: flex;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.10);
padding: 10px;
margin: 10px;
&>img{
    width: 75px;
    height: 75px;
    border-radius: 50%;
}
`


const ListaMatch = () => {
    const [lista, setLista] = useState([])
    const pegaMatchs = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Andrade/matches")
            .then((res) => {
                setLista(res.data.matches)
            })
    }
    useEffect(() => {
        pegaMatchs();
    }, [lista]);

    const limparLista = async () => {
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Andrade/clear`)
        .then((res)=>{
            setLista([])
        }) 
    }

    return (
        <>
            <Box2>
                <h2>{lista.length} Matches</h2>
                {
                    lista.map((list) => {
                        return (
                            <CardList key={list.id}>
                                <img src={list.photo} />
                                <p>
                                    {list.name} , {list.age}
                                </p>
                            </CardList>
                        )
                    })
                }
            </Box2>
            <button onClick={limparLista}>Limpar Lista</button>
        </>
    )
}



export default ListaMatch;