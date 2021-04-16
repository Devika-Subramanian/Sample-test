module.exports = (err, req, res, next) => {
    console.log("=============",err)
  
    if (err instanceof URIError) {
      res.statusCode = 400
    } else {
      res.statusCode = 500
    }
  
    if (res.headersSent) return next(err)
    return res.send()
  }