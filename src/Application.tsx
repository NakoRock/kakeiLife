import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchAuthSession, signOut } from 'aws-amplify/auth'
import './Application.css'
import { useAtom } from 'jotai'
import { userAtom } from './jotai/Atoms'
import * as queries from './graphql/queries'
import { generateClient } from 'aws-amplify/api'

const Application: React.FC = () => {
  const navigate = useNavigate()
  const client = generateClient({ authMode: 'userPool' })
  const [user, setUser] = useAtom(userAtom)
  const [uid, setUid] = useState('')

  useEffect(() => {
    const initialize = async () => {
      try {
        const { accessToken } = (await fetchAuthSession()).tokens ?? {}
        const uid = accessToken?.payload?.sub
        if (!uid) throw new Error('ユーザーは認証されていません')
        setUid(uid)
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

  useEffect(() => {
    if (uid) {
      if (user.sdate === 0) {
        navigate('/welcome')
      } else {
        navigate('/addmoney')
      }
    }
  }, [user])

  return (
    <div>
      {/* ロード中 */}
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  )
}

export default Application
