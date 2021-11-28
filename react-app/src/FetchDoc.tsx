import axios from 'axios'


export const FetchDoc = () => {

    const handleFetch = async () =>  {
        const result = await axios.get('https://docs.google.com/spreadsheets/d/1y3_GXMGO6VqbccxRPanKASu8NTThjFIy3YI_lqG0R_M/edit#gid=0')
            console.log(result.data)
    }
    
    const handleClick = () => {
        handleFetch()
    }
    
    return (
        <button onClick={handleClick}>fetch</button>
    )
}  