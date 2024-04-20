import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import { Amplify } from 'aws-amplify' // 修正部分
import config from './aws-exports'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import Application from './Application'
import Welcome from './Welcome'
import AddMoney from './AddMoney'
import ListDateEx from './ListDateEx'
import './App.css'
import { useAtom } from 'jotai'
import { userAtom } from './jotai/Atoms'
import { loginAtom } from './jotai/Atoms'
import { loadAtom } from './jotai/Atoms'
import * as queries from './graphql/queries'
import { generateClient } from 'aws-amplify/api'
import { fetchAuthSession } from 'aws-amplify/auth'
import { I18n } from 'aws-amplify/utils'
import { translations } from '@aws-amplify/ui-react'
import PrivateRoute from './PrivateRoute'
I18n.putVocabularies(translations)
I18n.setLanguage('ja')

Amplify.configure(config)

const App = () => {
  const client = generateClient({ authMode: 'userPool' })
  const [, setUser] = useAtom(userAtom)
  const [login] = useAtom(loginAtom)
  const [, setLoad] = useAtom(loadAtom)
  useEffect(() => {
    const initialize = async () => {
      try {
        setLoad(true)
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
        setLoad(false)
      } catch (err) {
        console.log(err)
        // ここでエラーメッセージをUIに表示するための状態更新を行うか、またはエラー画面にリダイレクトする
      }
    }
    if (login) initialize()
  }, [login])

  const components = {
    Header() {
      return (
        <div className="d-flex justify-content-center align-items-center my-4">
          <img
            src="cat.png"
            alt="icon"
            style={{
              height: '200px',
              width: '130px',
              margin: 'auto',
            }}
          />{' '}
        </div>
      )
    },
  }
  return (
    <div>
      <Authenticator components={components} hideSignUp={true}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Application />
                </PrivateRoute>
              }
            />
            <Route
              path="/addmoney"
              element={
                <PrivateRoute>
                  <AddMoney />
                </PrivateRoute>
              }
            />
            <Route
              path="/list-date-ex"
              element={
                <PrivateRoute>
                  <ListDateEx />
                </PrivateRoute>
              }
            />
            <Route
              path="/welcome"
              element={
                <PrivateRoute>
                  <Welcome />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </Authenticator>
    </div>
  )
}

export default App
