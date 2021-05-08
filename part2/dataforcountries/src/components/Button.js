import React from 'react'

const Button = ({ country, handleVisibility }) => {

    return(
    <button onClick={handleVisibility}> {country.visible ? 'close' : 'show'}</button>
    )
}

export default Button