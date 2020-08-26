import axios from 'axios';


const api = axios.create({
    baseURL: "http://localhost:5557/api"
})

const insertUser = payload => api.post('/insertUser', payload)

const apis = {
    insertUser
}

export default apis