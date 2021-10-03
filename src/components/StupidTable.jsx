import { useEffect, useState } from 'react'
import { dataFetcher, itemsCutter } from '../utils/articlesUtils'


export const StupidTable = ({ itemsCount }) => {

    const isItemsCountANumber = !isNaN(itemsCount)
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [formattedItems, setFormattedItems] = useState([])

    useEffect(() => {
        setLoading(true)
        dataFetcher().then(r => {
            if (items.length === 0 && loading) {
                console.log(r)
                setItems(() => r)
            }
        })
        setLoading(() => items.length <= 0)
    }, [items.length, loading]);

    useEffect(() => {
        if(itemsCount > 0) {
            setFormattedItems(() => itemsCutter(items, itemsCount > 0 ? itemsCount : 100))
        }
    }, [items, itemsCount])

    console.log(items)
    return (
        !loading && isItemsCountANumber && itemsCount > 0 ? (
            <ul>
                {formattedItems.map(({ id, title }) => <li key={id}>{title}</li>)}
            </ul>) : ''
    );
};
