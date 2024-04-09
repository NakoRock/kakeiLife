import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Welcome.css'
import { useAtom } from 'jotai'
import { userAtom } from './jotai/Atoms'
import * as mutations from './graphql/mutations'

import { generateClient } from 'aws-amplify/api'

const Welcome: React.FC = () => {
  const navigate = useNavigate()
  const [saving, setSaving] = useState(0)
  const [life, setLife] = useState(0)
  const [dateClose, setDateClose] = useState(0)
  const [user] = useAtom(userAtom)

  /**
   *  貯金の入力フォーム
   */
  const changeSaving = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.startsWith('0') && value !== '0') {
      // 先頭が0だった場合は、削る
      e.target.value = value.slice(1)
      // 先頭が0でなくなるまで削る
      while (e.target.value.startsWith('0') && e.target.value !== '0') {
        e.target.value = e.target.value.slice(1)
      }
    }
    if (value === '') {
      e.target.value = '0'
    }
    setSaving(parseInt(value))
  }
  /**
   * 使用可能額の入力フォーム
   */
  const changeLife = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.startsWith('0') && value !== '0') {
      // 先頭が0だった場合は、削る
      e.target.value = value.slice(1)
      // 先頭が0でなくなるまで削る
      while (e.target.value.startsWith('0') && e.target.value !== '0') {
        e.target.value = e.target.value.slice(1)
      }
    }
    if (value === '') {
      e.target.value = '0'
    }
    setLife(parseInt(value))
  }
  /**
   * 確定ボタン
   */
  const submit = async () => {
    const client = generateClient({
      authMode: 'userPool',
    })
    const sdate = dateClose === 31 ? 1 : dateClose + 1
    const req = {
      id: user.id,
      savemoney: saving,
      currentmoney: life,
      sdate,
      edate: dateClose,
    }
    try {
      await client.graphql({
        query: mutations.updateUser,
        variables: { input: req },
      })
    } catch (err) {
      console.log('error update user', err)
    }
    navigate('/addmoney')
  }

  return (
    <div className="welcome mt-4">
      <h4 className="d-flex justify-content-center">ようこそ</h4>
      <h4 className="d-flex justify-content-center mt-3">
        最初の設定をしましょう
        {user.sdate}
      </h4>
      <div className="input-form mt-4">
        <div className="d-flex justify-content-center align-items-center mt-3 px-2">
          <input
            type="number"
            className="form-control"
            placeholder="今現在の貯金額"
            value={saving}
            onChange={(e) => changeSaving(e)}
          />
        </div>
        <div className="d-flex flex-column align-items-start mt-3 px-2">
          <input
            type="number"
            className="form-control"
            placeholder="今月使っても良い金額"
            value={life}
            onChange={(e) => changeLife(e)}
          />
          <span className="small mt-1">
            ※次回カード引き落としの際に赤字にならないような金額を設定しましょう
          </span>
        </div>
        {/* 入力フォーム 日付 */}
        <div className="d-flex flex-column align-items-start mt-3 px-2">
          <label className="ml-1">クレジットカードの締日</label>
          <select
            className="form-control"
            value={dateClose}
            onChange={(e) => setDateClose(parseInt(e.target.value))}
          >
            {[...Array(31)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}日
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* 固定フッター */}
      <div className="footer bg-light fixed-bottom d-flex justify-content-center align-items-center">
        <button className="btn btn-success px-5 " onClick={() => submit()}>
          確定
        </button>
      </div>
    </div>
  )
}

export default Welcome
