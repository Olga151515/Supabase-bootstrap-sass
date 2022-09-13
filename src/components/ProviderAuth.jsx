import { Button } from 'react-bootstrap'
import React, {useContext} from 'react'
import {FaDiscord, FaGithub} from 'react-icons/fa'
import AppContext from '../context/AppContext'

const ProviderAuth = () => {
    const {signInProvider} = useContext(AppContext)
  return (
    <div className='d-flex gap-3'>
        <Button variant='secondary' onClick={() => signInProvider('discord')}>
            <FaDiscord className='fs-4' />
        </Button>
        <Button variant='secondary' onClick={() => signInProvider('github')}>
            <FaGithub className='fs-4' />
        </Button>
    </div>
  )
}

export default ProviderAuth