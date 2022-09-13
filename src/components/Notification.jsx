import React, {useContext} from 'react'
import { useEffect } from 'react';
import AppContext from '../context/AppContext'

const Notification = () => {
    const { notification, setNotification } = useContext(AppContext);
    useEffect(() => {
        if(!!notification) {
            setTimeout(() => {
                setNotification(null)
            }, 2000);
        }
    })
  return <>
  {notification && (
  <div className={`position-fixed alert top-0 translate-middle-x mt-3
  start-50 alert-${notification.type}`}>
        {notification.message}
    </div>
    )} 
    </>
}

export default Notification;