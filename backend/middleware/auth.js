import jwt from 'jsonwebtoken'

const authMiddleWare = async(req,res,next)=>{
    const {token} = req.headers;
    if(!token){
        return res.json({success:false, message:"Not Authorized Login Again"})
    }
    try{
        const token_decode = jwt.verify(token,'your_jwt_secret');
        req.body.userId = token_decode.id;
        next();
    }
    catch(error){
        console.log(error);
        req.json({success:false,message:"Error"})

    }
}

export default authMiddleWare;