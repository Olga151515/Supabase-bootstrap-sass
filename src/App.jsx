import React, {useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './routes'
import LayoutPrivate from './layouts/LayoutPrivate';
import LayoutPublic from './layouts/LayoutPublic';
import supabase from './supabaseClient';
import Notification from './components/Notification';
import Loading from './components/Loading';
import AppContext from './context/AppContext';



const App = () => {
  const {appUser} = useContext(AppContext)
  // const [isAuth, setIsAuth] = useState(false)
  // useEffect(() => {
  //   supabase.auth.onAuthStateChange((event, session) => {
  //    setIsAuth(session !== null)
  //   })
  // }, [])
  
  return (
    <div className='bg-light min-vh-100'>
      <Routes>
        {privateRoutes.map((r, i) => (
         <Route 
         key={i}
          path={r.path} 
          element={
            appUser ? (
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
<<<<<<< HEAD:src/App.jsx
            !appUser ? (
=======
            !user ? (
>>>>>>> 6fbecd2ce7de5a739a9ab3ae17030089c89aca86:src/App.js
              <LayoutPublic>
                  <r.element />
              </LayoutPublic>
              ) : (
                <Navigate to='/' />
              )
          } />
        ))}
      </Routes>
      <Notification />
      <Loading />
    </div> 
  )
}

export default App;
