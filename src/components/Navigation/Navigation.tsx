import React from 'react'
import { AppBar, Typography, IconButton, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const Navigation = () => {
    return (
        <>
           <AppBar position="static">
            <Toolbar>
                <IconButton edge="start"  color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" >
                SpaceX
                </Typography>
            </Toolbar>
            </AppBar>  
        </>
    )
}

export default Navigation
