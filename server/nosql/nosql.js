const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/study_group_management';

module.exports = {
    async mongoConnection() {
        try {
            const connection = await mongoose.connect(process.env.MONGODB_URI || `${url}`);
            return connection;
        } catch (error) {
            console.log(`mongoConnection error occured ${error}`);
            throw error;
        }
    },

    async mongoDisconnection(connection) {
        try {
            await mongoose.disconnect();
            console.log(`mongo connetion is end`);
            return;
        } catch (error) {
            console.log(`mongoDisconnection error occured ${error}`);
            throw error;
        }
    }
}

