
import asyncHandler from 'express-async-handler';

const register = asyncHandler(async (req, res, next) => {
  res.send('TODO: implement signup');
});

const login = asyncHandler(async (req, res, next) => {
  res.send('TODO: implement login');
})

export { register, login };

