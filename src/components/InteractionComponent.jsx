import { useState } from 'react'

export const InteractionComponent = ({ itemsSetter }) => {
    const [input, setInput] = useState('')
    return (
        <>
            <input type={'number'} onChange={({ target: {value} }) => setInput(value)} value={input}/>
            <button onClick={() => {
                itemsSetter(input)
                setInput('')
            }}>Submit
            </button>
        </>
    )
}
