import './App.scss';

import NotFound from './components/notFound/notFound';
import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';

const Photo = React.lazy(() => import('./features/photo/photo'));

function App() {


  return (
    <div className='photo-app'>
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header></Header>

          <Routes>
            <Route exact path='/' element={<Navigate to='/photos'/>}/>
            <Route path='/photos/*' element={<Photo/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
