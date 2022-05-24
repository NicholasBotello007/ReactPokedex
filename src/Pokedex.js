import React from "react";
import {
    AppBar,
    Toolbar,
    Grid,
    Card,
    CardContent
} from "@mui/material"


const getPokemonCard = () => {
    return(
    <Grid item xs = {4} sm = {4}>
        <Card>
            <CardContent>
                Hi
            </CardContent>
        </Card>
    </Grid>
    )
}

const Pokedex = () => {
    
    return (
        <>
            <AppBar position = "static">
                <Toolbar/>
            </AppBar>
            <Grid container spacing = {4}>
                  {getPokemonCard()}
                  {getPokemonCard()}
                  {getPokemonCard()}
                  {getPokemonCard()}
                  {getPokemonCard()}
                  {getPokemonCard()}
            </Grid>
        </>
    );
};

export default Pokedex;