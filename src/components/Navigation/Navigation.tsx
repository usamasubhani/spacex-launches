import React from 'react'
import { AppBar, Typography, IconButton, Toolbar, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Button component={Link} to="/" color="inherit">SpaceX</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navigation
