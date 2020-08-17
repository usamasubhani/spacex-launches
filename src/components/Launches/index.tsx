import React from 'react'
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from '../LaunchItem';

const LAUNCHES_QUERY = gql `
    query LaunchList {
        launchesPast(limit: 10) {
            id
            launch_year
            mission_name
            rocket {
              rocket_name
            }
            launch_success
          }
    }  
`

const Launches = () => {

    const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    
    if (loading) return <div className="launches" style={{marginTop: "40vh"}}><CircularProgress /></div>;
    if (error) {
      console.log(error); 
      return <p>Error happen</p>;
    }
    console.log(data)
    return (
        <div className="launches">
            <Grid container spacing={3}>
            {
                data.launchesPast.map((launch:any) => (
                <Grid item xs={12} sm={6} key={launch.id} >
                    <LaunchItem launch={launch} />
                </Grid>
                ))
            }
            </Grid>
        </div>
    )
}

export default Launches
