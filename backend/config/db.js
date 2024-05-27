import mongoose from "mongoose";



export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://AliNayan123:01690205129@cluster0.jgvumox.mongodb.net/lunch-management-system').then(
        () => console.log('DB Connected...')
    )
}