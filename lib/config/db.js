import mongoose from "mongoose";


export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://mandavisahay:aristos@cluster0.zaobf.mongodb.net/blog-app')
    console.log('DB Connected')
}
