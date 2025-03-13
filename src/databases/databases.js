import mongoose from 'mongoose';

const mongoURI = "mongodb+srv://praveenruchira339:lkCHG1qT2pfqP4kS@cluster2003.d0scf.mongodb.net/myDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        console.log(`🔗 Connecting to MongoDB: ${mongoURI}`); // Debugging
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ MongoDB Connected Successfully');
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error);
        process.exit(1);
    }
};

export default connectDB;
