import jwt from "jsonwebtoken";

// bankUser athentication middleware
const bankUserAuth = (req, res, next) => {
  try {
    const s8token = req.cookies.s8token;
    if (!s8token) {
      res.json({ success: false, message: "Not authorized, Login First" });
    }

    const token_decode = jwt.verify(s8token, process.env.JWT_SECRET_KEY);

    if (!token_decode) {
      res.json({ success: false, message: "Not authorized, Login again" });
    }
    console.log(token_decode)
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default bankUserAuth;
