const mongoose =require("mongoose");

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database Connected Successfully ")

    }
    catch(error ){
        console.log("DB connection failed",error);
            process.exit(1);


    }
}
module.exports=connectDB