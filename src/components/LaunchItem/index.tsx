import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import { Card, CardContent, Typography, makeStyles, Button, CardActions } from '@material-ui/core';



type Props = {
    launch: any
}
const LaunchItem:React.FC<Props> = ({launch}) => {

    const {
        launch_year,
        mission_name,
        rocket: { rocket_name },
        launch_success
      } = launch;

    return (
        <Card className="launch-item">
          <CardContent>
            <Typography className="title" color="textSecondary" gutterBottom>{launch_year}</Typography>
            <Typography variant="h5" component="h2">{mission_name}</Typography>
        </CardContent>
        <CardActions>
            <Button size="small" component={RouterLink} to={`/launch/${launch.id}`} > Details </Button>
        </CardActions>
          
        </Card>
    )
}

export default LaunchItem
