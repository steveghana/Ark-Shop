import jwt from "jsonwebtoken";
export const middleware = (req, res, next) => {
  const token = req.headers.authorisation.split(" ")[1];
  const isCustomToken = token.length > 500;
  let authenticatedData;
  try {
    if (token && isCustomToken) {
      authenticatedData = jwt.verify(token, process.env.JWT_SECRET);
      console.log(authenticatedData);
      req.userId = authenticatedData.id;
    } else {
      authenticatedData = jwt.decode(token);
      req.userId = authenticatedData.sub;
    }
  } catch (error) {
    console.log(error.message);
  }
  next();
};
