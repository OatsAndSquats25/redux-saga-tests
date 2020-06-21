import axios from 'axios'

export const fetchData = async () => {
    try {
        const {data} = await axios.get('https://randomuser.me/api')
        return data
    } catch (e) {
        console.log('fetch data error', e)
    }

}
