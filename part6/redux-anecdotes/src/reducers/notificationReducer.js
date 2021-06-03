
const notificationReducer = (state = 'notification', action) => {
  switch(action.type) {
    case 'NEW_NOTIFICATION' :
      return action.notificaiton
    default: return state
  }
}

export const newNotification = (notification) => {
  return {
    type: 'NEW_NOTIFICATION',
    notification
  }
}

export default notificationReducer