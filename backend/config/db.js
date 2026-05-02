import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // We'll use a local MongoDB or just skip actual connection if URI isn't provided to prevent crashes
    if (!process.env.MONGO_URI) {
      console.log('MongoDB URI not found, running in mock mode for development.');
      return;
    }
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
