import React from 'react'
import { AppBar, Typography, IconButton, Toolbar, Button } from '@material-ui/core'
import Brightness6Icon from '@material-ui/icons/Brightness6';
import { Link } from 'react-router-dom';
type Props ={
    toggle: () => void;
}
const Navigation : React.FC<Props> = ({toggle}) => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Button component={Link} to="/" color="inherit">SpaceX</Button>
                    <Button style={{marginLeft: "auto"}} onClick={toggle} color="inherit">
                        <Brightness6Icon />
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navigation
