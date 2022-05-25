import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CircularProgress
} from "@mui/material"
import mockData from "./mockData"
import { toFirstCharUppercase } from "./constants";

const Pokedex = props => {
    const { history } = props;
    const [pokemonData, setPokemonData] = useState(mockData);

    const getPokemonCard = (pokemonId) => {
       console.log(pokemonData[pokemonId])
        const { id, name } = pokemonData[pokemonId];
        const sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+id+".png"
    
    
        return(
        <Grid item xs = {4} key = {pokemonId}>
            <Card onClick = {() => history.push(pokemonId)}>
               <CardMedia
                    image={sprite}
                    style={{ width: "130px", height: "130px" }}
               />
                <CardContent>
                <Typography>{`${id}. ${toFirstCharUppercase(name)}`}</Typography>
                </CardContent>
            </Card>
        </Grid>
        )
    }

    return (
        <>
            <AppBar position = "static">
                <Toolbar />
            </AppBar>
            {pokemonData ? (
            <Grid container spacing = {4}>
                  {Object.keys(pokemonData).map(pokemonId => 
                    getPokemonCard(pokemonId))}
            </Grid>
            ) : (
                <CircularProgress />
            )}
        </>
    );
};

export default Pokedex;