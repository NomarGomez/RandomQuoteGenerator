import { get } from "axios";

const API_URL = "https://quote-garden.herokuapp.com/";
const API_VERSION = "api/v3/";

export function randomQuote() {
    return new Promise((success, reject) => {
        get(`${API_URL}${API_VERSION}quotes/random`)
            .then(({ data }) => {
                console.log("API correctly fetching")
                success(data.data[0]);
            })
            .catch((error) => {
                console.log("API Error")
                reject(error);
            });
    });
}
