import React from 'react'

type Props = {
    launch: any
}
const LaunchItem:React.FC<Props> = ({launch}) => {
    return (
        <div>
            <h3>{launch.mission_name}</h3>
            <h4>{launch.launch_date_utc}</h4>
        </div>
    )
}

export default LaunchItem
