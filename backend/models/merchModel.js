import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    name: {
        type:String,
        required:true
    },
    rating: {
        type:Number,
        required:true
    },
    comment: {
        type:String,
        required:true
    }

},{
    timestamps:true
})

const merchSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
        name: {
            type:String,
            required:true
        },
        image: {
            type:String,
            required:true
        },
        options:{
         isThere:{
            type:Boolean,
            required:true,
            default:false
         },
         title:{
            type:String
         },
         optionsDetails:[
           { name:{
                type:String,
            },
            image:{
                type:String
            }}
         ]
        },
        description:
        {
            type:String,
            required:true
        },
        reviews:[reviewSchema],
        price: {
            type:Number,
            required:true,
            default:0
        },
        countInStock: {
            type:Number,
            required:true,
            default:0
        },
        rating: {
            type:Number,
            required:true,
            default:0
        },
        numReviews: {
            type:Number,
            required:true,
            default:0
        },

},{
    timestamps:true
})


const Merch = mongoose.model("Merch", merchSchema)

export default Merch;
