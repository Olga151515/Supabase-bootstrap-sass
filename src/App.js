import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './routes'
import LayoutPrivate from './layouts/LayoutPrivate';
import LayoutPublic from './layouts/LayoutPublic';



const App = () => {
  const user = null;
  return (
    <div className='bg-light min-vh-100'>
      <Routes>
        {privateRoutes.map((r, i) => (
         <Route 
         key={i}
          path={r.path} 
          element={
            user ? (
            <LayoutPrivate>
                <r.element />
            </LayoutPrivate>
            ) : (
              <Navigate to='/login' />
            )
         } 
         />
        ))};

      {publicRoutes.map((r, i) => (
         <Route 
         key={i}
          path={r.path} 
          element={
            user ? (
              <LayoutPublic>
                  <r.element />
              </LayoutPublic>
              ) : (
                <Navigate to='/' />
              )
          } />
        ))}
      </Routes>
    </div> 
  )
}

export default App;