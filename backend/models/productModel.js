import mongoose from "mongoose";

const dosageSchema = new mongoose.Schema({
    dosage:String,
    image:String
})

const flavorsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dosages:[dosageSchema]

})

const productSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    name: {
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    mainImage:String,
    flavors :[flavorsSchema],
    description:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const Product = mongoose.model("Product", productSchema)

export default Product;
