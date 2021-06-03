const errorHandler = (error, request, response, next) => {
  console.log(error)
  // if(error.message.includes('password')) {
  //   return response.status(403).json({
  //     error: error.message
  //   })
  // }
  // if(error.message.includes('validation')) {
  //   return response.status(403).send({
  //     error: error.message
  //   })
  // }
  next(error)
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({
    error: 'unknown Endpoint'
  })
}


module.exports = {
  errorHandler,
  unknownEndpoint
}