import anecdotesService from '../services/anecdotes'

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'INIT_ANECDOTES' : 
      return action.data
    case 'VOTEFOR' :
      return state.map( a => a.id === action.data.id ? action.data : a )
    case 'ADD_NEW':
      return state.concat(action.data)
    default:
      return state
  }
}

export const initAnecdotes = () => {
  return async dispatch => { 
    const anecdotes = await anecdotesService.getAll()
    console.log(anecdotes)
    dispatch(
      {
        type: 'INIT_ANECDOTES',
        data: anecdotes
        }
    )
  }
} 

export const voteFor = (anecdote) => {

  return async dispatch => {

    const anecdoteToUpdate = await anecdotesService.updateLikes(anecdote)

    dispatch({
      type: 'VOTEFOR',
      data: anecdoteToUpdate
  })
}
}

export const addNew = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.create(content)
    dispatch({
      type: 'ADD_NEW',
      data: newAnecdote
    })
  }
}

export default reducer