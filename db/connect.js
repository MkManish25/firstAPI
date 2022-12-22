const mongoose = require("mongoose");

// uri = "mongodb+srv://Manish25:3UdSvVbINDZdtS1H@cluster0.wz9t9st.mongodb.net/Cluster0?retryWrites=true&w=majority"
mongoose.set('strictQuery', true);
  
const connectDB = (uri) => {
    console.log("connect to db");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
  
};

module.exports = connectDB;