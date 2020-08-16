import React from 'react'
import { gql } from 'apollo-boost';
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks';

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
          }
    }  
`

const Launch = () => {
    const { id } = useParams();

    const { loading, error, data } = useQuery(LAUNCH_QUERY, {
        variables: { id }
    });

    if (loading) return <p>Loading...</p>;
    if (error) {
      console.log(error); 
      return <p>Error happen</p>;
    }
    console.log(data)
    const {
      launch_date_utc,
      launch_site: { site_name },
      links: { flickr_images, video_link },
      mission_name,
      rocket: { rocket_name },
    } = data.launch;

    return (
        <div>
            <h1>{mission_name}</h1>

        </div>
    )
}

export default Launch
