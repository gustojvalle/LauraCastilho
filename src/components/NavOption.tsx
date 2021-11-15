import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'


type Props = {
    to:string, 
    optionName:string, 

}

const useStyles = makeStyles(({palette}) => ({
    link:{
        textDecoration:'none', 
        color:palette.primary.main, 
        position:'relative', 
        zIndex:9999, 
        
        '&:hover':{
            cursor:'pointer'
        }
    }, 
    li:{
        position:'relative', 
        zIndex:9999, 
        borderLeft:`solid 2px ${palette.primary.light}`,
        borderRight:`solid 2px ${palette.primary.light}`,
        marginBottom:'3.2rem',
        padding:'0 0.8rem',
        '&::marker':{
            content:'""'
        },
        '&::before':{
            top:-10,
            left:-2, 
            position:'absolute',
            content:'""', 
            width:'calc(100% + 4px);',
            height:'10px', 
            border: `solid 2px ${palette.primary.light}`,

        }, 
        '&::after':{
            left:-2, 
            top:'100%',
            position:'absolute',
            content:'""', 
            width:'calc(100% + 4px);',
            height:'10px', 
            border: `solid 2px ${palette.primary.light}`,

        }, 
    }
}))


export default function NavOption({to, optionName }:Props) {

    const classes = useStyles()

    return (
        <li className={classes.li}>
            <NavLink className={classes.link} to={to} ><Typography variant='h2'>{optionName}</Typography></NavLink>
        </li>
    )
}
