import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import "./FormFilm.css"
/**
 * Composant formulaire d'ajout d'un film
 * @param {*} props 
 * @returns 
 */
export const FormulaireFilm = (props) => {
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
    //state qui me permetra de push le nouveau film ajouter par l'utilisateurs dans le tableau recupérer en local
    let [films,setfilms] = useState([]);

    //utilisation de useNavigate pour redirection
    let navigate = useNavigate();

    //Cycle de création du composant
    useEffect(() => {
        //Récupération des films sauvegarder en local
        let films = localStorage.getItem('films');
        setfilms(JSON.parse(films))
    }, [])

   

    //Methode qui recupérer les changement de valeurs des input
    const handleChange = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setFilm({ ...film, [e.target.name]: e.target.value });
    }

    //Methode de soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        let filmSubmit = film
        films.push(filmSubmit)
        //setfilms([...films,filmSubmit]) bug sur le setFilms , ajoute 2 films à la fois et ne fonctionne pas sur le premier clique
        localStorage.setItem("films",JSON.stringify(films))
        //redirection vers la liste des films une fois le film ajouté
        navigate("/films")
    }
    return(
        <>
              <h3>Formulaire d'ajout</h3>

            <form onSubmit={handleSubmit} class="form">
                <TextField
                    label="titre"
                    type="text"
                    name="titre"
                    onChange={handleChange}
                />

                <TextField
                    label="acteurs"
                    type="text"
                    name="acteurs"
                    onChange={handleChange}
                />

                <TextField
                    label="duree"
                    type="text"
                    name="duree"
                    onChange={handleChange}
                />

                <TextField
                    label="resume"
                    type="text"
                    name="resume"
                    onChange={handleChange}
                />

                <TextField
                    label="histoire"
                    type="text"
                    name="histoire"
                    onChange={handleChange}
                />

                <TextField
                    label="date"
                    type="text"
                    name="date"
                    onChange={handleChange}
                />
                <Button variant="contained" color="success" type="submit"> Valider</Button>
            </form>
        </>
    )
    }

   
export default FormulaireFilm;