import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import logger from 'redux-logger'
import InitialState from '../reducers/InitialState'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()
export const ConfigureStore = (InitState = InitialState) => {
  const store = createStore(rootReducer, InitState, applyMiddleware(logger, sagaMiddleware))
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}
export const withReduxSaga = BaseComponent => withRedux(ConfigureStore)(nextReduxSaga(BaseComponent))
