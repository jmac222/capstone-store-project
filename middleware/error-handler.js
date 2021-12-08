const CustomAPIError = require('../errors/custom-error')

const errorHandlerMiddleware = (err,req,res, next) => {
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: err.message})
    } 
    return res.status(500).send('dcushcauhc')
    
    if(err.code && err.code === 11000){
        CustomAPIError.msg = 'no item found with id with thatvalue'
    }
}
module.exports = errorHandlerMiddleware;