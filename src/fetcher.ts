import fetch, { RequestInit } from 'node-fetch';
import * as querystring from 'querystring';

export class CatFetcher {
    private apiKey: string;
    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    private fetchApi(endpoint: string, options?: RequestInit) {
        return fetch(`https://api.thecatapi.com/v1${endpoint}`, {
            headers: {
                'x-api-key': this.apiKey,
            },
            ...options
        }); 
    }

    public getCat(id: string) {
        return this.fetchApi(`/images/${id}`);
    }

    public async getRandomCat() {
        const randomNumberOne = Math.floor(Math.random() * (100 + 1));
        
        const params = querystring.stringify({
            size: 'full',
            order: 'RANDOM',
            limit: randomNumberOne,
        });
        
        const response = await this.fetchApi(`/images/search?${params}`);
        const body = await response.json();
        const randomNumberTwo = Math.floor(Math.random() * (body.length + 1));
        return body[randomNumberTwo];
    }
}
