import {createStore,applyMiddleware} from 'redux'
import Thunk from 'redux-thunk'
import {rootReducer} from '../redux/reducer/rootReducer'

export const store=createStore(rootReducer,applyMiddleware(Thunk))