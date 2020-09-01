const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/study_group_management';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 60000,
    keepAlive: true,
}

module.exports = {
    async mongoConnection() {
        try {
            const connection = await mongoose.createConnection(
                process.env.MONGODB_URI || `${url}`,
                options
            );
            console.log(`mongo connetion on`);
            return connection;
        } catch (error) {
            console.log(`mongoConnection error occured ${error}`);
            throw error;
        }
    },

    async mongoDisconnection(connection) {
        try {
            await connection.close();
            console.log(`mongo connetion off`);
            return;
        } catch (error) {
            console.log(`mongoDisconnection error occured ${error}`);
            throw error;
        }
    }
}

