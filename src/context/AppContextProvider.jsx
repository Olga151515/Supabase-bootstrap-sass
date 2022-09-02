import React, {useState} from 'react';
import AppContext from './AppContext';
import supabase from '../supabaseClient'

const AppContextProvider = ({children}) => {
    const [activeItems, setActiveItems] = useState([])
    const [inactiveItems, setInactiveItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [adding, setAdding] = useState(false)
  return (
    <AppContext.Provider 
    value={{activeItems, inactiveItems, loading, adding}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;