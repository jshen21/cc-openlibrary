import React from 'react'
import { Dimmer } from 'semantic-ui-react'


const Loading = () => {
    return (
        <Dimmer active>
            <div id='loaderContainer'>
                <div className='loader'></div>
            </div>  
            <label>Loading...</label>
        </Dimmer>
    )
}

export default Loading