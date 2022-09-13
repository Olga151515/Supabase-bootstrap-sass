import React, {useContext} from 'react'
import AppContext from '../context/AppContext'

const Loading = () => {
    const { loading } = useContext(AppContext)
  return (
  <> {loading && <div>Loading</div>}</>
  )
}

export default Loading