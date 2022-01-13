import React,{useState,useEffect} from "react";
import { Card,CardContent,Typography  } from "@mui/material";
import "./DetailFilm.css"

/**
 * Composant Detail d'un film
 * @param {*} props 
 * @returns 
 */
export const DetailFilm = (props) => {
    //state du composant
    let [film,setFilm] = useState({
        id:null,
        titre:"",
        acteurs:"",
        duree:"",
        resume:"",
        histoire:"",
        date:""
    })
    //Cycle de création du composant
    useEffect(() => {
    // Récupération du film choisi par l'utilisateur depuis la variable local
    setFilm(JSON.parse(localStorage.getItem('id')))
     
    }, [])
    return(
        <>
            <div className="card">
            <Card sx={{ mb: 1.5, width: 600 , mt:10}}>
                <CardContent >
                    <Typography color="text.secondary" gutterBottom> Titre : </Typography>
                    <Typography gutterBottom> {film.titre}</Typography>
                    <Typography color="text.secondary" gutterBottom> Acteurs : </Typography>
                    <Typography gutterBottom> {film.acteurs}</Typography>
                    <Typography color="text.secondary" gutterBottom> Duree : </Typography>
                    <Typography gutterBottom> {film.duree}</Typography>
                    <Typography color="text.secondary" gutterBottom>  Resume :</Typography>
                    <Typography gutterBottom> {film.resume}</Typography>
                    <Typography color="text.secondary" gutterBottom>  Histoire : </Typography>
                    <Typography gutterBottom> {film.histoire}</Typography>
                    <Typography color="text.secondary" gutterBottom>  Date de sortie </Typography>
                    <Typography gutterBottom> {film.date}</Typography>
                </CardContent>

            </Card>
            </div>
        </>
    )
    }

export default DetailFilm;