import React, {useState} from "react";
import mockData from "./mockData"
import { Typography } from "@mui/material"
import { toFirstCharUppercase } from "./constants";

const Pokemon = (props) => {
    const { match } = props;
    const { params } = match;
    const { pokemonId } = params;
    const {pokemon, setPokemon} = useState(mockData[pokemonId])
    
    const generatePokemonJSX = () => {
        const { name, id, species, height, weight, types, sprites } = pokemon;
        const fullImageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +id+ ".png";
        const { front_default } = sprites;
        return (
           <>
           <Typography variant="h1">
             {id} {toFirstCharUppercase(name)}
                <img src={front_default} />
            </Typography>
            <img style={{ width: "300px", height: "300px" }} src={fullImageUrl} />
            </>
        )
    };
   
   return(
    <> {generatePokemonJSX()}</>
   );
};


export default Pokemon;