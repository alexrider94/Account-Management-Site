import mongoose from 'mongoose';
const url = 'mongodb://localhost:27017/study_group_management';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 60000,
    keepAlive: true,
}

import { logger } from "../log/logger.js";
const log = (msg) => logger.info(msg);

export const mongoConnection = async () => {
    try {
        const connection = await mongoose.createConnection(
            process.env.MONGODB_URI || `${url}`,
            options
        );
        log(`mongo connetion on`);
        return connection;
    } catch (error) {
        log(`mongoConnection error occured ${error}`);
        throw error;
    }
}

export const mongoDisconnection = async (connection) => {
    try {
        await connection.close();
        log(`mongo connetion off`);
        return;
    } catch (error) {
        log(`mongoDisconnection error occured ${error}`);
        throw error;
    }
}

