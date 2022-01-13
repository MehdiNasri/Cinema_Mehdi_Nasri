import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";

import { Breadcrumbs , AppBar, IconButton, MenuIcon,Typography,Toolbar,Box } from "@mui/material";

/**
 * Composant navbar
 * @param {*} props 
 * @returns 
 */
export const NavBar = (props) => {
    return(
        <>
           
           
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense" className="toolbar">
                        {props.pages && props.pages.map((page, index) => {
                            return <Link className="link" key={index} to={page.to}>{page.nom}</Link>
                        })}
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default NavBar;