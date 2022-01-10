import React from 'react';

import './CardPequeno.css'

function CardGrande(props) {
    return (
        <div className="base-info">
            <img src={ props.imagem } />
            <div>
                <h1>{ props.nome }</h1>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardPequeno