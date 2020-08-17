import React from 'react'
import { gql } from 'apollo-boost';
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks';
import { Typography, Paper, Grid, Container, CircularProgress } from '@material-ui/core';
import Moment from 'react-moment';

const LAUNCH_QUERY = gql `
    query LaunchList($id: ID!) {
        launch(id: $id) {
            launch_date_utc
            launch_site {
              site_name
            }
            launch_success
            links {
              flickr_images
              video_link
            }
            mission_name
            rocket {
              rocket_name
            }
            details
          }
    }  
`

const Launch = () => {
    const { id } = useParams();

    const { loading, error, data } = useQuery(LAUNCH_QUERY, {
        variables: { id }
    });

    if (loading) return <div className="launch-page"><CircularProgress /></div>;
    if (error) {
      console.log(error); 
      return <p>Error happen</p>;
    }

    const {
      launch_date_utc,
      launch_site: { site_name },
      links: { flickr_images, video_link },
      mission_name,
      rocket: { rocket_name },
      details
    } = data.launch;

    return (
        <div >
          <Container className="launch-page" maxWidth="lg">
            <Typography gutterBottom> <span className="label"> </span><Moment format="DD-MM-YYYY">{launch_date_utc}</Moment> </Typography>
            <Typography variant="h4" gutterBottom> <span className="label">Mission: </span> {mission_name}</Typography>
            <Typography variant="h4" gutterBottom> <span className="label">Rocket: </span> {rocket_name}</Typography>
            <Typography variant="h4" gutterBottom> <span className="label">Launch Site: </span> {site_name}</Typography>
            
            <Typography gutterBottom>{details}</Typography>
            <Grid container spacing={2}>
              {
                flickr_images.map((image : string) => 
                <Grid item >
                  <img className="image" src={image} />
                </Grid>
                )
              }
            </Grid>
            
          </Container>
        </div>
    )
}

export default Launch
