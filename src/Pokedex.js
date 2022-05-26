import React, { useEffect, useState } from "react";
import {
    AppBar,
    Toolbar,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    TextField,
    CircularProgress
} from "@mui/material"
import { toFirstCharUppercase } from "./constants";
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";



const Pokedex = props => {
    const { history } = props;
    const [pokemonData, setPokemonData] = useState({});
    const [filter, setFilter] = useState("");

    const handleSearchChange = (e) => {
        setFilter(e.target.value);
      };

    useEffect(() => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon?limit=898`)
          .then(function (response) {
                const { data } = response;
                const { results } = data;
                const newPokemonData = {};
                results.forEach((pokemon, index) => {
                    newPokemonData[index + 1] = {
                        id: index + 1,
                        name: pokemon.name,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                         index + 1
                        }.png`,
                    };
                });
                setPokemonData(newPokemonData);
            });
    }, []);


    const getPokemonCard = (pokemonId) => {
       console.log(pokemonData[pokemonId])
        const { id, name, sprite } = pokemonData[pokemonId];
    
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
                <Toolbar> 
                    <div>
                        <SearchIcon  />
                        <TextField onChange={handleSearchChange} />
                    </div>
               </Toolbar>
            </AppBar>
            {pokemonData ? (
            <Grid container spacing = {4}>
                  {Object.keys(pokemonData).map((pokemonId) => 
                    pokemonData[pokemonId].name.includes(filter) &&
                    getPokemonCard(pokemonId))}
            </Grid>
            ) : (
                <CircularProgress />
            )}
        </>
    );
};

export default Pokedex;