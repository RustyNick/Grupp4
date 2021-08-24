import React from 'react';
import { useHistory } from 'react-router-dom'

const Group4 = () => {
    const history = useHistory()
    return (
        <div >
            <h4>sida av Group4 test</h4>
<button className="btn" onClick={() => history.push('/')}>Back to START</button>

           
        </div>
    )
}

export default Group4