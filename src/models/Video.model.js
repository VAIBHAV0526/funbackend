import { Schema } from "mongoose";
const VideoSchema = new Schema({   
videoFile:{
    type:String,
    required:true,
},
thumbnail:{
    type:String,
    required:true,
},
title:{
    type:String,
    required:true,  

},
description:{
    type:String,
    },
duration:{
    type:Number,
    required:true,
},
views:{
    type:Number,
    default:0,
},
ispublshed:{
    type:Boolean,
    default:true,
},
owner:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required:true,
},
}
,{timestamps:true});
VideoSchema.plugin(require('mongoose-paginate-v2'));

export const Video=mongoose.model('Video',VideoSchema);