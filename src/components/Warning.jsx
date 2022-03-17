import React from 'react'

import './Warning.css'

const Warning = ({ children }) => {
    return ( 
        <>
            <div className='warning-container'>
                <div className='warning'>
                    {children}
                </div>
            </div>
        </>
     );
}
 
export default Warning;