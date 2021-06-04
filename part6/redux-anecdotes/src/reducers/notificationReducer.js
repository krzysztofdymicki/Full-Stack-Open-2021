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

// export const newNotification = (notification) => {
//   return {
//     type: 'NEW_NOTIFICATION',
//     notification
//   }
// }

// export const resetNotification = () => {
//   return {
//     type: 'RESET_NOTIFICATION'
//   }
// }

export const setNotification = (notification,time) => {
  return async dispatch => {
    clearTimeout()
    await setTimeout(() => {
      dispatch({
        type: 'RESET_NOTIFICATION',
        notification
      })
    }, time*1000)
    dispatch({
      type: 'NEW_NOTIFICATION',
      notification
    })
  }
}

export default notificationReducer