import axios from 'axios';

class HttpClient {
    async get(url: string) {
        const resp = await axios.get(url);
        return resp.data;
    }

    async post(url: string, data: any) {
        const resp = await axios.post(url, data);
        return resp.data;
    }

    async delete(url: string) {
        const resp = await axios.delete(url);
        return resp.data;
    }

    async put(url: string, data: any) {
        const resp = await axios.put(url, data);
        return resp.data;
    }
}

export const httpClient = new HttpClient();
