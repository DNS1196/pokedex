import React from "react";
import "./Pokecard.css";

const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"


function Pokecard({ id, name, type, exp }) {
    const imgSrc = `${baseURL}${id}.png`;

    return (
        <div className="Pokecard">
            <div className="Pokecard-title">{name}</div>
            <img className="Pokecard-image" src={imgSrc} alt={name} />
            <div className="Pokecard-data">Type: {type}</div>
            <div className="Pokecard-data">EXP: {exp}</div>
        </div>
    )

}

export default Pokecard;