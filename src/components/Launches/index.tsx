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
    
    if (loading) return <div className="launches"><p>Loading...</p></div>;
    if (error) {
      console.log(error); 
      return <p>Error happen</p>;
    }
    console.log(data)
    return (
        <div className="launches">
            {
                data.launchesPast.map((launch:any) => (
                <LaunchItem key={launch.id} launch={launch} />
                ))
            }
        </div>
    )
}

export default Launches
