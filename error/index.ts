import { STATUS_CODE } from '../constatns';

export const errorName = {
  UNAUTHORIZED: 'UNAUTHORIZED',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  NOT_FOUND: 'NOT_FOUND',
  BAD_REQUEST: 'BAD_REQUEST',
};

export const errorType = {
  UNAUTHORIZED: {
    message: 'Authentication is needed to get requested response',
    statusCode: STATUS_CODE.FORBIDDEN,
  },
  INTERNAL_SERVER_ERROR: {
    message: 'The server was unable to process this request.',
    statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
  },
  NOT_FOUND: {
    message: 'The server was unable to process this request.',
    statusCode: STATUS_CODE.NOT_FOUND,
  },
  BAD_REQUEST: {
    message: 'The server was unable to process this request.',
    statusCode: STATUS_CODE.BAD_REQUEST,
  },
};
