'use strict';

const re = require('restify-errors');
const ERROR = require('./error_types');

module.exports = (errorType, msgError) => {
  let error = '';
  switch (errorType) {
  case ERROR.NOT_FOUND:
    error = new re.ResourceNotFoundError({statusCode: 404, message: msgError});
    break;
  case ERROR.INTERNAL_ERROR:
    error = new re.InternalError({statusCode: 500, message: msgError});
    break;
  case ERROR.CONFLICT:
    error = new re.InvalidArgumentError({statusCode: 409, message: msgError});
    break;
  case ERROR.EXPECTATION_FAILED:
    error = new re.ExpectationFailedError({statusCode: 417, message: msgError});
    break;
  case ERROR.UNAUTHORIZED:
    error = new re.UnauthorizedError({statusCode: 401, message: msgError});
    break;
  }
  return error;
}
