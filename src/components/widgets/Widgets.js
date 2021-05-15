import React from 'react'
import InfoIcon from '@material-ui/icons/Info';

import './widgets.css'
import { FiberManualRecord } from '@material-ui/icons';

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn Clone</h2>
                <InfoIcon />
            </div>

            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecord />
                </div>
                <div className="widgets__articleRight">
                    <h4>Coding LinkedIN Clone</h4>
                    <p>Top News - 3000 readers</p>
                </div>
            </div>
            
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecord />
                </div>
                <div className="widgets__articleRight">
                    <h4>Coding LinkedIN Clone</h4>
                    <p>Top News - 3000 readers</p>
                </div>
            </div>
        </div>
    )
}

export default Widgets
