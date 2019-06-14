import axios from 'axios';
const url = 'https://api.kanye.rest'

export const getKanyeQuote = () => {
    return axios.get(url)
        .then(({ data: { quote } }) => {
            return quote
        })
}