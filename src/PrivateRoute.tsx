import React, { useEffect, useState, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchAuthSession } from 'aws-amplify/auth'

interface PrivateRouteProps {
  children: ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const [user, setUser] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    getSession()
  }, [])

  const getSession = async () => {
    try {
      const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {}
      console.dir({ accessToken, idToken })
      setUser(true)
    } catch (err) {
      console.log('ユーザーは認証されていません')
      setUser(false)
      navigate('/')
    }
  }
  return user ? <>{children}</> : null
}

export default PrivateRoute
