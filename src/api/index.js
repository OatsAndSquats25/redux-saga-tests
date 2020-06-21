import axios from 'axios'

export const fetchData = async () => {
    try {
        const {data} = await axios.get('http://localhost:3001')
        return data
    } catch (e) {
        console.log('fetch data error', e)
    }

}
