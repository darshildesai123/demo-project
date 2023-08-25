import axios from "axios";

const client = axios.create({
    // baseURL: "https://rickandmortyapi.com/api"
    baseURL: "http://localhost:3001"
});

export async function get(url) {
    const {data} = await client.get(url);
    console.log('data :>> ', data);
    return data;
}

export async function post (url, body) {
    const { data } = await client.post (url, body);
    return data;
}

export async function del(url) {
    const { data } = await client.delete(url);
    return data;
}

export async function patch(url, body) {
    const { data } = await client.patch(url, body);
    return data;
}