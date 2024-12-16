import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(401).json({ success: false, message: "Not Authorized. Please login again." });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid token. Please login again." });
  }
};

export default authMiddleware;