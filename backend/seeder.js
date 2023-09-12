import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import merchProducts from "./data/merch.js";
import User from "./models/userModel.js";
import Merch from "./models/merchModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";



dotenv.config();
connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Merch.deleteMany();
        await User.deleteMany();
        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id

        const sampleMerch = merchProducts.map(product => {
            return { ...product, user:adminUser}
        })

        await Merch.insertMany(sampleMerch);
        console.log("data imported")
        process.exit()
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}


const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Merch.deleteMany();
        await User.deleteMany();
        console.log("data destroyed")
        process.exit()
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

if (process.argv[2] === "-d"){
   destroyData()
} else {
  importData()
}