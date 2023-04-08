import React from "react";
import Pokecard from "./Pokecard";
import './Pokedex.css'

function Pokedex({ pokelist }) {
    return (
        <div className="Pokedex">

            <h2 className="Pokedex-title">Pokedex </h2>
            <div className="Pokedex-cards">
                {pokelist.map(p => (
                    <Pokecard
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        exp={p.base_experience}
                    />
                ))}
            </div>
        </div>
    )
}


export default Pokedex;