import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import persistReducers from './persistReducers';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : undefined;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const store = createStore(
  persistReducers(rootReducer),
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware),
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
