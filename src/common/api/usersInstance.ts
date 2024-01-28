import axios from 'axios'

// TODO: To .env file
const BASE_URL = 'https://randomuser.me/api/'

export const usersInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    inc: 'gender,name,id,email',
  },
})
