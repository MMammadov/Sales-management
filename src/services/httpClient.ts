import axios from 'axios';

class HttpClient {
    public async get(url: string): Promise<any> {
        const res = await axios.get(url);

        return res.data;
    }
}

export const httpClient = new HttpClient();