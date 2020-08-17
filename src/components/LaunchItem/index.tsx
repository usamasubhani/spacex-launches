import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import { Card, CardContent, Typography, makeStyles, Button, CardActions, Avatar, CardHeader, IconButton, CardMedia } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



type Props = {
    launch: any
}
const LaunchItem:React.FC<Props> = ({launch}) => {

    const {
        launch_year,
        mission_name,
        rocket: { rocket_name },
        launch_success,
        links: {mission_patch_small, flickr_images}
      } = launch;

    return (
        <Card className="launch-item" elevation={3}>
            <CardHeader
                avatar={
                    <Avatar alt="patch" src={mission_patch_small} />
                }
                title={mission_name}
                subheader={launch_year}
            />
            <CardMedia
                style={{height: 0,
                    paddingTop: '56.25%'}}
                image={flickr_images[0]}
                title={mission_name}
            />
        <CardActions>
            <Button size="small" component={RouterLink} to={`/launch/${launch.id}`} > Details </Button>
        </CardActions>
          
        </Card>
    )
}

export default LaunchItem
