import React, { useEffect, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
// import { fetchAuthSession } from 'aws-amplify/auth'
import { useAtom } from 'jotai'
import { loadAtom } from './jotai/Atoms'
import { loginAtom } from './jotai/Atoms'
import { userAtom } from './jotai/Atoms'
import * as queries from './graphql/queries'

import { generateClient } from 'aws-amplify/api'

interface PrivateRouteProps {
  children: ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const [login, setLogin] = useAtom(loginAtom)
  const navigate = useNavigate()
  const [user] = useAtom(userAtom)
  const [, setLoad] = useAtom(loadAtom)

  useEffect(() => {
    if (!login) {
      setLogin(true)
    }
  }, [])

  useEffect(() => {
    /**
     *  貯金の入力フォーム
     */
    const checkMonthData = async () => {
      setLoad(true)
      const client = generateClient({
        authMode: 'userPool',
      })
      // todayから年月を取得
      const today = new Date().toISOString().slice(0, 10)
      const month = today.slice(0, 7)
      console.dir(user)
      const monthData = await client.graphql({
        query: queries.getMonthExpenses,
        variables: { id: user.id, meid: month.replace(/-/g, '') },
      })
      console.dir(monthData.data.getMonthExpenses)
      if (!monthData.data.getMonthExpenses) {
        navigate('/MonthUpdate')
      } else {
        navigate('/')
      }
      setLoad(false)
    }
    if (user.id) checkMonthData()
  }, [user])

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
