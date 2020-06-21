import {createStore, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()

let middleware = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
    middleware = [...middleware, createLogger()];
}

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
)

sagaMiddleware.run(sagas)

export default store


