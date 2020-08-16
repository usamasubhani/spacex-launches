import React from 'react'
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from '../LaunchItem';

const LAUNCHES_QUERY = gql `
    query LaunchList {
        launchesPast {
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
    
    if (loading) return <p>Loading...</p>;
    if (error) {
      console.log(error); 
      return <p>Error happen</p>;
    }
    console.log(data)
    return (
        <div>
            <h1>Launches</h1>
            {
                data.launchesPast.map((launch:any) => (
                <LaunchItem key={launch.id} launch={launch} />
                ))
            }
        </div>
    )
}

export default Launches
