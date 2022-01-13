import React,{useEffect} from "react";
import { Card,CardContent,Typography,Button} from "@mui/material";
import "./Accueil.css"
/**
 * Composant de l'accueil
 * @param {*} props 
 * @returns 
 */
export const Accueil = (props) => {
    //Récupération des films pré-enregistrer en local dans un fichier json
    let filmsJson = require("../commons/films.json");
    //Récupération des deux derniers films pour les film qui sont à l'affiche
    let films = filmsJson.slice(2);
    //Cycle de création du composant
    useEffect(() => {
        if(!localStorage.getItem("films")){
            //Ajout des films recupérer en json dans une variable local pour la recupérer partout dans l'application.
            localStorage.setItem("films",JSON.stringify(filmsJson));
        }   
    }, [])
    //Methode qui permet de clear les variables stockées local.
    const clearStorage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        localStorage.clear();
        localStorage.setItem("films",JSON.stringify(filmsJson));

    }
    return(
        <>
            <div className="accueilBody">
                <h1>Bienvenu dans le cinema de Mehdi Nasri </h1>
                <h3>A l'affiche :</h3>
                <div className="card">
                    {films && films.map((film, index) => {
                        return <div key={index} className="card">
                            <Card sx={{ mb: 1.5, width: 500 }}>
                                <CardContent >
                                    <Typography color="text.secondary" gutterBottom> Titre : </Typography>
                                    <Typography  gutterBottom> {film.titre}</Typography>
                                    <Typography color="text.secondary" gutterBottom> Acteurs : </Typography>
                                    <Typography  gutterBottom> {film.acteurs}</Typography>
                                    <Typography color="text.secondary" gutterBottom> Duree : </Typography>
                                    <Typography  gutterBottom> {film.duree}</Typography>
                                    <Typography color="text.secondary" gutterBottom>  Resume </Typography>
                                    <Typography  gutterBottom> {film.resume}</Typography>
                                </CardContent>
                            </Card>
                        </div>
                    })}
                </div>
                    
               
                

                <Button variant="contained" type="submit" onClick={clearStorage}>Reinitialiser les données en local</Button>
            </div>
        </>
    )
    }

export default Accueil;