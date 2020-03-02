import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default reducers =>
  persistReducer(
    {
      key: 'accountmanager',
      storage,
      whitelist: ['auth'],
    },
    reducers,
  );
