import React, {useState, useEffect} from 'react';
import AppContext from './AppContext';
import supabase from '../supabaseClient'

const AppContextProvider = ({children}) => {
    const [activeItems, setActiveItems] = useState([])
    const [inactiveItems, setInactiveItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [notification, setNotification] = useState(null)
    const [appUser, setAppUser] = useState(null)
    

    const signUp = async ({email, password, username}) => {
      setLoading(true)
      try {
        const { error} = await supabase.auth.signUp({
          email,
          password,
        }, {
          data: {
            username,
          }
        })
        if (error) {
          setNotification({
            type: 'danger',
            message: 'Something is wrong'
          })
        }
      }catch (error) {
        
      }finally {
        setLoading(false)
      }
    }

    const signIn = async ({email, password}) => {
      setLoading(true)
      try {
        const { error} = await supabase.auth.signIn({
          email,
          password,
      });
      if (error) {
        setNotification({
          type: 'danger',
          message: 'Email and/or password is incorrect'
        })
      }
      }catch (error) {  
      }finally {
        setLoading(false)
      }
    };

    const signInProvider = async (provider) => {
      setLoading(true)
      try {
        const { error} = await supabase.auth.signIn({
         provider
      });
      if (error) {
        setNotification({
          type: 'danger',
          message: 'Error'
        })
      }
      }catch (error) {  
      }finally {
        setLoading(false)
      }
    }

    const signOut = async ({email, password}) => {
      setLoading(true)
      try {
        await supabase.auth.signOut()
        setAppUser(null)
      }catch (error) {
        console.log(error);
      }finally {
        setLoading(false)
      }
    };

    supabase.auth.onAuthStateChange((event, session) => {
    if(event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
      setAppUser(session.user);
      localStorage.setItem('supado_access_token', session.access_token)
    }
      if(event === 'SIGNED_OUT') {
        setAppUser(null)
        localStorage.removeItem('supado_access_token')
      }
    });

    const addItem = async (item) => {
      setLoading(true)
      try {
        await supabase.from('todos').insert({item, userId: appUser.id})
        // fetchTodos()
      }catch (error) {
        console.log(error);
      }finally {
        setLoading(false)
      }
    };

    const removeItem = async (itemId) => {
      setLoading(true)
      try {
        await supabase
        .from('todos')
        .delete()
        .eq('id', itemId)
        .eq('userId', appUser.id)
        // fetchTodos()
      }catch (error) {
        console.log(error);
      }finally {
        setLoading(false)
      }
    };


    const toggleDoneItem = async (itemId, currentDone) => {
      setLoading(true)
      try {
        await supabase
        .from('todos')
        .update({ done: !currentDone })
        .eq('id', itemId)
        .eq('userId', appUser.id)
        // fetchTodos()
      }catch (error) {
        console.log(error);
      }finally {
        setLoading(false)
      }
    };

    // const toggleUndoneItem = async (itemId) => {
    //   setLoading(true)
    //   try {
    //     await supabase
    //     .from('todos')
    //     .update({ done: false })
    //     .eq('id', itemId)
    //     .eq('userId', appUser.id)
    //   }catch (error) {
    //     console.log(error);
    //   }finally {
    //     setLoading(false)
    //   }
    // };


    const editItem = async (itemId, item) => {
      setLoading(true)
      try {
        await supabase
        .from('todos')
        .update({ item })
        .eq('id', itemId)
        .eq('userId', appUser.id)
      }catch (error) {
        console.log(error);
      }finally {
        setLoading(false)
      }
    };

    const fetchTodos = async () => {
      setLoading(true)
      try {
      const {data, error} =  await supabase
        .from('todos')
        .select('item, done, id, created_at')
        .eq('userId', appUser.id )
        .order('created_at', { ascending: false})
        if(error) throw new Error('Something has gone wrong')
        setActiveItems(data.filter((todo) => !todo.done ))
        setInactiveItems(data.filter((todo) => todo.done ))
      }catch (error) {
        console.log(error);
      }finally {
        setLoading(false)
        
      }
    }

    useEffect(() => {
      if(localStorage.getItem('supado_access_token')){
        supabase.auth.setAuth(localStorage.getItem('supado_access_token'))
      } 
    }, []);


    useEffect(() => {
      if(appUser) {
        fetchTodos()
      }
    }, [appUser])

    useEffect(() => {
      if(appUser) {
      supabase
        .from('todos')
        .on('*', (payload) => {
          console.log(payload);
          fetchTodos()
      })
      .subscribe();
    }
  }, [appUser]);


  return (
    <AppContext.Provider 
    value={{
        activeItems,
        inactiveItems, 
        loading, 
        signUp, 
        signIn, 
        signOut,
        notification,
        setNotification,
        appUser,
        addItem,
        removeItem,
        toggleDoneItem,
        editItem,
        signInProvider,
         }}
         >
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;