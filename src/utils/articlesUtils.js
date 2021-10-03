import axios from 'axios'

export const dataFetcher = async () => {
    const { data } = await axios.get('https://h0xf8ijr9e.execute-api.us-east-1.amazonaws.com/')
    return data
}
