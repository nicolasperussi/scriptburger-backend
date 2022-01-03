import jwt from "jsonwebtoken";

export const secret = "5cc00761d833fff87ff43814918412d2";

export const generateToken = (params = {}): string => {
  return jwt.sign(params, secret, { expiresIn: 60*60*24*365 });
};
