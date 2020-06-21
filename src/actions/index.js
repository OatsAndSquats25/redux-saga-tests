export const REQUEST_API_DATA = 'REQUEST_API_DATA'
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA'

export const requestApiData = (data) => {
    return {
        type: REQUEST_API_DATA,
        data,
    }
}

export const receiveApiData = data => {
    return {
        type: RECEIVE_API_DATA,
        data
    }
}
