import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import { Amplify } from 'aws-amplify' // 修正部分
import config from './aws-exports'
import { withAuthenticator } from '@aws-amplify/ui-react'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import Application from './Application'
import Welcome from './Welcome'
import AddMoney from './AddMoney'
import './App.css'
import { useAtom } from 'jotai'
import { userAtom } from './jotai/Atoms'
import * as queries from './graphql/queries'
import { generateClient } from 'aws-amplify/api'
import { fetchAuthSession } from 'aws-amplify/auth'

Amplify.configure(config)

const App = () => {
  const client = generateClient({ authMode: 'userPool' })
  const [, setUser] = useAtom(userAtom)

  useEffect(() => {
    const initialize = async () => {
      try {
        const { accessToken } = (await fetchAuthSession()).tokens ?? {}
        const uid = accessToken?.payload?.sub
        if (!uid) throw new Error('ユーザーは認証されていません')
        const userData = await client.graphql({
          query: queries.getUser,
          variables: { id: uid },
        })
        setUser({
          currentmoney: userData?.data?.getUser?.currentmoney || 0,
          edate: userData?.data?.getUser?.edate || 0,
          email: userData?.data?.getUser?.email || '',
          id: userData?.data?.getUser?.id || '',
          savemoney: userData?.data?.getUser?.savemoney || 0,
          sdate: userData?.data?.getUser?.sdate || 0,
          username: userData?.data?.getUser?.username || '',
        })
      } catch (err) {
        console.log(err)
        // ここでエラーメッセージをUIに表示するための状態更新を行うか、またはエラー画面にリダイレクトする
      }
    }
    initialize()
  }, []) // 必要に応じて依存配列を調整

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Application />} />
        <Route path="/addmoney" element={<AddMoney />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default withAuthenticator(App)
