import React, { useEffect, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
// import { fetchAuthSession } from 'aws-amplify/auth'
import { useAtom } from 'jotai'
import { loginAtom } from './jotai/Atoms'

interface PrivateRouteProps {
  children: ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  // const [user, setUser] = useState(false)
  const [login, setLogin] = useAtom(loginAtom)
  const navigate = useNavigate()

  useEffect(() => {
    if (!login) {
      setLogin(true)
      navigate('/')
    }
  }, [])

  // const getSession = async () => {
  //   try {
  //     const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {}
  //     console.dir({ accessToken, idToken })
  //     setUser(true)
  //   } catch (err) {
  //     console.log('ユーザーは認証されていません')
  //     setUser(false)
  //     navigate('/')
  //   }
  // }
  return <>{children}</>
}

export default PrivateRoute
