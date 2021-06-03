const initialState = 'notification'

const notificationReducer = (state = 'notification', action) => {
  switch(action.type) {
    case 'NEW_NOTIFICATION' :
      return action.notification
    case 'RESET_NOTIFICATION' :
      return initialState
    default: return state
  }
}

export const newNotification = (notification) => {
  return {
    type: 'NEW_NOTIFICATION',
    notification
  }
}

export const resetNotification = () => {
  return {
    type: 'RESET_NOTIFICATION'
  }
}

export default notificationReducer