import asyncHandler from "../middleware/asyncHandler.js";
import Merch from "../models/merchModel.js";

const getMerchProducts = asyncHandler(async (req, res) => {
    const merchProducts = await Merch.find({});
    res.json(merchProducts);
});


const getMerchProductById = asyncHandler(async (req, res) => {
    const merchProduct = await Merch.findById(req.params.id);
    
    if(merchProduct){
       return res.json(merchProduct);
    } else {
        res.status(404);
        throw new Error('Resource not found');
    }
});

export {getMerchProducts, getMerchProductById};