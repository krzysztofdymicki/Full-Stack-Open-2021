import React from 'react'

const Notification = ({ notification }) => {

  const style = {
    color: notification.type === "positive" ? "green" : "red",
    fontSize: "1.2em",
    width: "100%",
    margin: "0 auto",
    padding: "1em",
    borderRadius: "1em"
  }

  return (
    <div style={style}>
      {notification.content}
    </div>
  )
}

export default Notification