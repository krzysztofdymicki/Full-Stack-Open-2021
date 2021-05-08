import React from 'react'

const Notification = ({ message }) => {
    if(!message) {
        return null
    }
    else if(message.type === 'positive') {
        return <div style={{backgroundColor: 'green', fontSize: 20, padding: 40}}>{message.content}</div>
    }
    else if(message.type === 'negative') {
        return <div style={{backgroundColor: 'red', fontSize: 20, padding: 40}}>{message.content}</div>
    }
    else return null
}

export default Notification