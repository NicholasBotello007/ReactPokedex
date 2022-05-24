import React from "react";
import {
    AppBar,
    Toolbar,
    Grid,
    Card
} from "@mui/material"
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    pokedexContainer:{
        paddingTop: '20px',
        paddingLeft: '50px',
        paddingRight: '50px'
    },
})

const getPokemonCard = () => {
    return(
    <Grid item xs = {12} sm = {4}>
        <Card>hi</Card>
    </Grid>
    )
}

const Pokedex = () => {
    const classes = useStyles();
    
    return (
        <>
            <AppBar position = "static">
                <Toolbar/>
            </AppBar>
            <Grid container spacing = {2} className = {classes.pokedexContainer}>
              <Grid item xs={5}>
                  this is item 1
                </Grid>  
            <Grid item xs={5}>
                  this is item 2
             </Grid>
            </Grid>
        </>
    );
};

export default Pokedex;