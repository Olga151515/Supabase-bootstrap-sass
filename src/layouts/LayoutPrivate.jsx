import React from 'react'
import Header from '../components/Header'


const LayoutPrivate = ({children}) => {
  return (
    <div>
      <Header />
      
        {children}
    </div>
  )
}

export default LayoutPrivate

