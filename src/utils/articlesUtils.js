import axios from 'axios'

const config = {
    "Content-Type": "application/json",
    "X-API-Key": "2FmNXBHOrZ5y5ENbO3wja58GiwEfUbUr6uzoLDCA"
}

export const dataFetcher = async () => {
    const { data } = await axios.get('https://fsjkd5tro0.execute-api.us-east-1.amazonaws.com/dev/titles', { headers: config })
    return data
}


export const itemsCutter = (items, itemsCount) => items.slice(0, itemsCount)
