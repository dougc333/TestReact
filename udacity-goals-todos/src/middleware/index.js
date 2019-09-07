import checker from './checker'
import logger from './logger'
import { applyMiddleware } from 'redux'
import thunk from 'react-thunk'


export default applyMiddleware(
    thunk,
    checker,
    logger
)
