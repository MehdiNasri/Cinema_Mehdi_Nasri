import React,{useState,useEffect} from "react";
import {  useNavigate  } from "react-router-dom";
import { Card,CardContent,Typography,CardActions,Button  } from "@mui/material";
import "./ListFilm.css"

/**
 * Composant liste des films
 * @param {*} props 
 * @returns 
 */
export const ListFilm = (props) => {
    //state du composant
    let [films,setFilms] = useState([])

    //utilisation de useNavigate pour redirection
    let navigate = useNavigate();

    useEffect(() => {
        //Récupération des films sauvegarder en local
        let films = localStorage.getItem('films');
        setFilms(JSON.parse(films))
    }, [])


    //Methode permet au click d'envoyé l'id du film choisi dans la session storage
    const HandeClick = (e,id) => {
        e.stopPropagation();
        //AJout d'une variable local qui permet de savoir quel film l'utilisateur choisi 
        localStorage.setItem("id",JSON.stringify(films[id])); 
        //Redirection vers le composant detail.
        navigate("/detail");
    }

    //Methode qui permet de supprimer un film
    const deleteItem = (e,id) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(id);
        //suppression de l'element selectionné
        films.splice(id  , 1);
        let filmSupp = [...films];
        setFilms(filmSupp)
        //Mise a jours du localstorage
        localStorage.setItem("films",JSON.stringify(filmSupp))
    }
    return(
        <>
              <h1>Voici la liste de tout les films </h1>
            <ul>
            <div className="card">
                {films && films.map((film, index) => {
                    
                    return <div key={index}>
                       <Card sx={{ mb: 1.5, width: 600}}>
                                <CardContent >
                                    <Typography color="text.secondary" gutterBottom> Titre : </Typography>
                                    <Typography  gutterBottom> {film.titre}</Typography>
                                    <Typography color="text.secondary" gutterBottom> Acteurs : </Typography>
                                    <Typography  gutterBottom> {film.acteurs}</Typography>
                                    <Typography color="text.secondary" gutterBottom> Duree : </Typography>
                                    <Typography  gutterBottom> {film.duree}</Typography>
                                    <Typography color="text.secondary" gutterBottom>  Resume :</Typography>
                                    <Typography  gutterBottom> {film.resume}</Typography>
                                    <Typography color="text.secondary" gutterBottom>  Histoire : </Typography>
                                    <Typography  gutterBottom> {film.histoire}</Typography>
                                    <Typography color="text.secondary" gutterBottom>  Date de sortie </Typography>
                                    <Typography  gutterBottom> {film.date}</Typography>
                                </CardContent>
                                <CardActions className="card-action">
                                    <Button zise="small" to="/detail" type="submit" onClick={(e) => HandeClick(e,index)}  >Details</Button>
                                    <Button zise="small" onClick={(e) => deleteItem(e,index) } >Supprimer</Button>
                                </CardActions>
                            </Card>
                    </div>
                        
                })}
                </div>
            </ul>
                 
          
        </>
    )
    }

export default ListFilm;