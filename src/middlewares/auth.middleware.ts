import { Request, Response, NextFunction } from 'express';
// eslint-disable-next-line consistent-return
const validateToken = (req:Request, res:Response, next:NextFunction) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({
      status: '401 Unauthorized',
      error: 'Access token is Required',
    });
  }
  if(token !=='inbillo'){
    return res.status(401).json({
      status: '401 Unauthorized',
      error: 'Access token is Invalid',
    });
  }
  return next();
};
export default validateToken;
