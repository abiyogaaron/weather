import React from 'react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { Route, Router, Routes } from 'react-router-dom';
import { 
  AnyAction,
  combineReducers,
  configureStore,
  Store,
} from '@reduxjs/toolkit';

import { Provider } from 'react-redux';

import Home from './Redux/home';
import { RootState } from './Redux';

interface IRenderWithRouterParams {
  children: JSX.Element;
  path?: string;
  route?: string;
  history?: MemoryHistory;
}
interface IRenderWithRouterReturn {
  ui: JSX.Element;
  history: MemoryHistory;
}
export const renderWithRouter = ({
  children,
  path = '/',
  route = '/',
  history = createMemoryHistory({ initialEntries: [route] }), 
}: IRenderWithRouterParams): IRenderWithRouterReturn => {
  return {
    ui: (
      <Router location={route} navigator={history}>
        <Routes>
          <Route path={path} element={children} />
        </Routes>
      </Router>
    ),
    history,
  };
};

interface IRenderWithProviderParams {
  ui: JSX.Element;
  store?: Store<RootState, AnyAction>;
}
type TRenderProviderReturn = Required<IRenderWithProviderParams>;
export const renderWithProvider = ({
  ui,
  store,
}: IRenderWithProviderParams): TRenderProviderReturn => {

  if (!store) {
    const rootReducer = combineReducers({
      [Home.name]: Home.reducer,
    });
    
    const newStore = configureStore({ 
      reducer: rootReducer,
      devTools: false,
    });

    return {
      ui: (
        <Provider store={newStore}>
          {ui}
        </Provider>
      ),
      store: newStore,
    };
  }

  return {
    ui: (
      <Provider store={store}>
        {ui}
      </Provider>
    ),
    store: store,
  };
};

