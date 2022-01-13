import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Accueil from "../pages/Accueil";
import DetailFilm from "../pages/films/DetailFilm";
import FormulaireFilm from "../pages/films/FormFilm";
import ListFilm from "../pages/films/ListFilm";
import { NavBar } from "./NavBar";
import { Page404 } from "./Page404";

/**
 * Composant de routing permet les redirections
 * @param {} props 
 * @returns 
 */
export const Routing = (props) => {
    return(
        <>
            <Router>
                <NavBar pages={props.pages} />
                <Routes>
                    <Route path="/" element={<Navigate to="/accueil" />} />
                    <Route path="/accueil" element={<Accueil />} />
                    <Route path="/formulaire" element={<FormulaireFilm />} /> 
                    <Route path="/films" element={<ListFilm />} />
                    <Route path="/detail" element={<DetailFilm />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Router>
        </>
      
    )
   
}

export default Routing;