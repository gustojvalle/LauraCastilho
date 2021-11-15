
import React, { useState } from "react";
import NavOption from "./NavOption";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
const useStyles = makeStyles(({palette})=> ({
  burgerMenu:{
    padding:'2.0rem', 
    display:'flex'
  },
  icon:{
    color:palette.secondary.light,
    height:30, 
    position:'relative', 
    zIndex:9999, 
    '&:hover':{
      cursor:'pointer'
    }
  }, 
  list:{
    top:0,
    width:'100%', 
    height:'100%',
    display:'flex', 
    flexDirection:'column', 
    alignItems:'center', 
    justifyContent:'center',
    position:'fixed', 
    left:'-50vw', 
    transform: 'translateX(-50vw)', 
    transitionDuration:'0.5s',
    backgroundColor: palette.secondary.dark
  }, 
  listMobileOpen:{
    transform: 'translateX(50vw)', 
    transitionDuration:'0.5s'
  }
})) 

export default function BurgerMenu() {

  const [opened, setOpened] = useState<boolean>(false)
  const classes = useStyles(); 

  return (
    <div className={classNames(classes.burgerMenu)}>
      <FontAwesomeIcon onClick={()=> setOpened(prev=> !prev)} className={classes.icon} icon={faBars}/>
      <ul className={classNames(classes.list, {[classes.listMobileOpen]:opened})}>
        <NavOption to="/home" optionName="Home" />
        <NavOption to="/experience" optionName="Experience" />
        <NavOption to="/education" optionName="Education" />
        <NavOption to="/projects" optionName="Projects" />
      </ul>
    </div>
  );
}
