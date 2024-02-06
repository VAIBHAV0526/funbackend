import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userschema=new Schema({

    username:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        index:true,
        unique:true,

    },
   email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        unique:true,
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true,
    },
    avatar:{
        type:String, // cloudinary url
        required:true,
    },
    coverimage:{
        type:String, // cloudinary url
        
    },
    watchhistory:[
        {
            type:Schema.Types.ObjectId,
            ref:'Video'
        }
    ],
    password:{
        type:String,
        required:[true,'Password is required'],
    },

    refreshToken:{
        type:String,
    }


},{timestamps:true})
userschema.pre('save',async function (next){
if(this.isModified('password')){
this.password=await bcrypt.hash(this.password,10);
}
next();

});
userschema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password);
}
userschema.methods.genrateAcessToken=function(){
    return jwt.sign({        _id:this._id,
        username:this.username,
        fullname:this.fullname,
    }
    ,process.env.ACCESS_TOKEN_SCERET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }

    )

}
userschema.methods.genrateRefreshToken=function(){
    return jwt.sign({        _id:this._id,
        username:this.username,
        fullname:this.fullname,
    }
    ,process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }

    )

}
export const User=mongoose.model('User',userschema);