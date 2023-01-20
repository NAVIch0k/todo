import axios from 'axios'

const APP_URL = process.env.APP_URL

export const instance = axios.create({
    baseURL: APP_URL
})