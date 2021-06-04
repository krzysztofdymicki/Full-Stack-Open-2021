import anecdotesService from '../services/anecdotes'

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'INIT_ANECDOTES' : 
      return action.data
    case 'VOTEFOR' :
      return state.map( a => a.id === action.data.id ? {...a, votes: a.votes +1} : a )
    case 'ADD_NEW':
      return state.concat(action.data)
    default:
      return state
  }
}

export const initAnecdotes = () => {
  return async dispatch => { 
    const anecdotes = await anecdotesService.getAll()

    dispatch(
      {
        type: 'INIT_ANECDOTES',
        data: anecdotes
        }
    )
  }
} 

export const voteFor = (id) => {
  return {
    type: 'VOTEFOR',
    data: {
      id
    }
  }
}

export const addNew = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.create({ content, votes: 0})
    dispatch({
      type: 'ADD_NEW',
      data: newAnecdote
    })
  }
}

export default reducer