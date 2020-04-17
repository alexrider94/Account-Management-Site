import axios from 'axios';


const api = axios.create({
    baseURL: "http://localhost:5000/api"
})


export const insertUser = payload => api.post('/user', payload)
export const getAllUser = () => api.get('/users')


const apis = {
    insertUser,
    getAllUser
}

export default apis