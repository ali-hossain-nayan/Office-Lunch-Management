

import jwt from 'jsonwebtoken'
const authMiddleWare = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.json({ success: false, message: "Not authorized! Please login again.." })
    }
    try {
        const decode_token = jwt.verify(token, process.env.JWT_SECRET);
        req.body.employeeId = decode_token.id;
        next();
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error!!" })
    }
}
export default authMiddleWare;