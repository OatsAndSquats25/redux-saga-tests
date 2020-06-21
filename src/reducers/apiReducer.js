import {RECEIVE_API_DATA} from "../actions";

const INITIAL_STATE = {}

const apiReducer = (state = INITIAL_STATE, {type, data}) => {

    switch (type) {
        case RECEIVE_API_DATA:
            return data
        default:
            return state
    }
}

export default apiReducer
