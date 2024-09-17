import axios from 'axios';

export const API_URL = 'http://65.0.21.14:8080';

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json','Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS', 
        'charset': 'UTF-8'
    }
    });