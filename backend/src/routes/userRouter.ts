import express from "express"

const userRouter = express.Router();

userRouter.get("/health",(req,res)=>{
    res.json({
        msg:"all good"
    })
})

userRouter.get("/signup",(req,res)=>{
    
});

export default userRouter;