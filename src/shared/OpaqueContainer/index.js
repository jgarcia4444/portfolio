import React from 'react';
import '../../styles/OpaqueContainer.css'

const OpaqueContainer = ({children}) => {

    return (
        <div className="container-fluid opaque-container">
            {children}
        </div>
    )
}

export default OpaqueContainer;