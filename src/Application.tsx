import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Application.css'
import { useAtom } from 'jotai'
import { userAtom } from './jotai/Atoms'

const Application: React.FC = () => {
  const navigate = useNavigate()
  const [user] = useAtom(userAtom)

  useEffect(() => {
    if (user.id === '') {
      return
    }
    if (user.sdate === 0) {
      navigate('/welcome')
    } else {
      navigate('/addmoney')
    }
  }, [user])

  return <div></div>
}

export default Application
