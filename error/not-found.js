const CustomError = require("./custom-error");

class NotFound extends CustomError {
  constructor(message) {
    super(message);
  }
}

module.exports = NotFound;