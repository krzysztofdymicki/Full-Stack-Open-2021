const errorHandler = (error, request, response, next) => {
  if(error.type === 'ValidationError') {
    return response.status(400)
  }
  next(error)
}

module.exports = errorHandler