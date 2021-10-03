import { useEffect, useState } from 'react'
import { dataFetcher } from '../utils/articlesUtils'



export const StupidTable = ({ itemsCount }) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        dataFetcher().then(r => {
            if (items.length === 0 && loading) {
                setItems(r.data)
            }
        })
        setLoading(() => items.length <= 0)
    }, [items.length, loading]);

    return (
        loading ? '' :
            <ul>
                {items.map(({ id, title }) => <li key={id}>{title}</li>)}
            </ul>
    );
};
