import axios from 'axios'

export const fetchData = async (params) => {
    try {
        const {data} = await axios.get(`http://localhost:3001?screen_name=${params.data.screen_name}`)
        return data
    } catch (e) {
        console.log('fetch data error', e)
    }

}
