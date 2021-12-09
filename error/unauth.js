const CustomError = require('./custom-error')
const {StatusCodes} = require('http-status-codes')

class UnauthError extends CustomError {
    constructor(message) {
        super(message)
        this.StatusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnauthError;