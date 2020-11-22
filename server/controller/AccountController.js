import { mongoConnection, mongoDisconnection } from "../mongodb/nosql.js";
import { logger } from '../log/logger.js';
const log = (msg) => logger.info(msg);

const openBankOption = {
    client_id: 'CgShq1NbDCe8FSnrTc2yK8d4vNJTlThuUwijhnJ2',
    client_secret: 'leSgSaNExsIGw6izPylaRxNZU7tazsRmGLM01dKB',
    redirect_uri: 'http://localhost:3000/'
}

export const getAccount = async (req, res) => {

}

export const accountAuth = async (req, res) => {
    return res.send(`https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${openBankOption.client_id}&redirect_uri=${openBankOption.redirect_uri}&scope=inquiry login&state=12345678901234567890123456789012&auth_type=0`);
}