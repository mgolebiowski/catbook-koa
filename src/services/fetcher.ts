import fetch, { RequestInit } from "node-fetch";
import * as querystring from "querystring";

export class CatFetcher {
  private apiKey: string;
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private fetchApi(endpoint: string, options?: RequestInit) {
    return fetch(`https://api.thecatapi.com/v1${endpoint}`, {
      headers: {
        "x-api-key": this.apiKey,
      },
      ...options,
    });
  }

  public getCat(id: string) {
    return this.fetchApi(`/images/${id}`);
  }

  public async getRandomCat() {
    const params = querystring.stringify({
      size: "full",
      order: "RANDOM",
      limit: 1,
    });

    const response = await this.fetchApi(`/images/search?${params}`);
    const body = await response.json();
    return body[0];
  }
}
