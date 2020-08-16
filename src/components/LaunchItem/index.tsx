import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    launch: any
}
const LaunchItem:React.FC<Props> = ({launch}) => {
    return (
        <div>
            <h3>{launch.mission_name}</h3>
            <h4>{launch.launch_year}</h4>
            <Link to={`/launch/${launch.id}`} > Details </Link>
        </div>
    )
}

export default LaunchItem
