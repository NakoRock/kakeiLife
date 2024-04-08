import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { fetchAuthSession } from 'aws-amplify/auth'
import { getUser } from './graphql/queries'
import './Application.css'
import { useAtom } from 'jotai'
import { atoms } from './jotai/Atoms'
import * as queris from './graphql/queries'
import { signOut } from 'aws-amplify/auth'
import { getCurrentUser } from 'aws-amplify/auth'

import { generateClient } from 'aws-amplify/api'

const Application: React.FC = () => {
  const navigate = useNavigate()
  const client = generateClient({
    authMode: 'userPool',
  })
  const [user, setUser] = useAtom(atoms.userAtom)
  const [uid, setUid] = useState('')

  const getSession = async () => {
    try {
      const { accessToken } = (await fetchAuthSession()).tokens ?? {}
      const { username, userId, signInDetails } = await getCurrentUser()
      console.dir({ accessToken, username, userId, signInDetails })
      const uid = accessToken?.payload?.sub
      if (!uid) throw new Error('ユーザーは認証されていません')
      setUid(uid)
    } catch (err) {
      console.log('ユーザーは認証されていません')
    }
  }
  const trySignOut = async () => {
    await signOut()
  }
  const fetchUser = async () => {
    try {
      const userData = await client.graphql({
        query: queris.getUser,
        variables: { id: uid },
      })
      console.dir(userData)
    } catch (err) {
      console.log('error fetching user', err)
    }
  }

  getSession()

  if (uid) {
    // graphqlのクエリを実行する(getUser)
    fetchUser()
    if (user.sdate === '') {
      navigate('/welcome')
    }
  }

  return (
    <div>
      <button
        className="btn btn-success px-5 mr-4"
        onClick={() => {
          trySignOut()
        }}
      >
        確定
      </button>
    </div>
  )
}

export default Application
