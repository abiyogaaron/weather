import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Components/Loader';

import {
  DivApp,
} from './style';

import './App.css';

const Home = lazy(() => import('./Modules/Home'));
const ForecastList = lazy(() => import('./Modules/ForecastList'));

function App() {
  return (
    <DivApp>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:lat/:lon' element={<Home />} />
          <Route path='/:lat/:lon/:date' element={<Home />} />
          <Route path='/forecast-list/:lat/:lon' element={<ForecastList />} />
        </Routes>
      </Suspense>
    </DivApp>
  );
}

export default App;
