const  JWT =require('jsonwebtoken')

const verifyToken=async(req,res,next)=>{
    const authHeader=req.headers.token
    if(!authHeader){
        return  res.status(401).json({
            errors:[
                {
                    "message":"You are not authenticated"
                }
            ]
            
        })
    }

try {
   
    const token=authHeader.split(' ')[1];
    await JWT.verify(token,process.env.TOKEN_SECRET);
    req.user=user;
    next();
} catch (error) {
    return  res.status(403).json({
        error:[
            {
                "message":"Token is Invalid"
            }
        ]
        
    })
}
}

const verifyTokenAndAuthorization=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(403).json("You are not permitted to do that")
        }
    })
}

const verifyTokenAndAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next()
        }else{
            res.status(403).json("You are not permitted to do that")
        }
    })
}

module.exports={
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
}