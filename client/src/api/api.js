import axios from 'axios';


const api = axios.create({
    baseURL: "http://localhost:5000/api"
})


export const insertUser = payload => api.post('/user', payload)
export const getAllUser = () => api.get('/users')
export const getSelectedUser = payload => api.post('/selectedUser', payload)

const apis = {
    insertUser,
    getAllUser,
    getSelectedUser
}

export default apis