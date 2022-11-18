import { 
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import { ENV } from '../Constants';

import Home from './home';

const rootReducer = combineReducers({
  [Home.name]: Home.reducer,
});

const store = configureStore({ 
  reducer: rootReducer,
  devTools: ENV !== 'production',
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<T = void> = ThunkAction<Promise<T>, RootState, undefined, Action<string>>;
