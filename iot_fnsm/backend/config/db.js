const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('');            //Agregar mensajes de exito
    } catch (error) {
        console.error('', error);   //Agregar mensaje de error
        process.exit(1);
    }
};

module.exports = connectDB;
