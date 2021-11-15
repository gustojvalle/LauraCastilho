import { makeStyles } from "@material-ui/core";
import React from "react";
import BurgerMenu from "./BurgerMenu";
import concrete from '../assets/concrete.jpg'


const useStyles = makeStyles(({palette}) => ({
    nav:{
        position:'relative', 
        backgroundImage:`linear-gradient(to right, ${palette.secondary.dark}, ${palette.secondary.light})`,
        '&::before':{
            position:'absolute',
            top:0,
            right:0,
            zindex:0, 
            opacity:0.1,
            backgroundImage:`url(${concrete})`, 
            height:'100%', 
            width:'100%', 
            content:'""'
        }
       }
}))

export default function Navbar() {
    const classes= useStyles()
  return (
    <nav className={classes.nav}>
      <BurgerMenu/>
    </nav>
  );
}
