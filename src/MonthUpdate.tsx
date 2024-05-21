import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Welcome.css'
import { useAtom } from 'jotai'
import { userAtom } from './jotai/Atoms'
import { loadAtom } from './jotai/Atoms'
import * as mutations from './graphql/mutations'
import './MonthUpdate.css'

import { generateClient } from 'aws-amplify/api'

const Welcome: React.FC = () => {
  const navigate = useNavigate()
  const [saving, setSaving] = useState(0)
  const [user] = useAtom(userAtom)
  const [, setLoad] = useAtom(loadAtom)
  // 金額とラベルの状態を管理する object型配列のexpencseを定義
  const [expenses, setExpenses] = useState<
    {
      amount: number
      label: string
      isincome: boolean
      iid: string
    }[]
  >([])

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
   * 確定ボタン
   */
  const submit = async () => {
    setLoad(true)
    const client = generateClient({
      authMode: 'userPool',
    })
    const today = new Date().toISOString().slice(0, 10)
    let totalspending = 0
    let totalincome = 0
    // expensesからamountが0のものを削除し、iidを追加したものを作成する
    const newExpenses = expenses.filter((item) => item.amount !== 0)
    // newExpensesのitemにiidを追加する。iidはyyyymmdd + index
    newExpenses.forEach((item, index) => {
      item.isincome
        ? (totalincome += item.amount)
        : (totalspending += item.amount)
      item.iid = `${today.replace(/-/g, '')}${index + 1}`
    })
    // todayから日を削除
    const month = today.slice(0, 7)
    try {
      const input = {
        id: user.id,
        meid: month.replace(/-/g, ''),
        month: month.replace(/-/g, ''),
        fixedcosts: newExpenses ? newExpenses : [],
        isstart: true,
        isfinish: false,
      }
      await client.graphql({
        query: mutations.createMonthExpenses,
        variables: { input },
      })
    } catch (err) {
      setLoad(false)
      console.log('error create month', err)
    }
    try {
      const req = {
        id: user.id,
        savemoney: user.savemoney + user.currentmoney,
        currentmoney: saving + user.currentmoney - totalspending,
      }
      await client.graphql({
        query: mutations.updateUser,
        variables: { input: req },
      })
    } catch (err) {
      setLoad(false)
      console.log('error update user', err)
    }
    setLoad(false)
    navigate('/addmoney')
  }

  /**
   * 金額とラベルを追加する関数
   */
  const addExpense = (amount: number, label: string, isincome: boolean) => {
    setExpenses([...expenses, { amount, label, isincome, iid: '' }])
  }
  /**
   * 金額の変更
   */
  const handleAmountChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      if (value.startsWith('0') && value !== '0') {
        if (value.startsWith('0') && value !== '0') {
          // 先頭が0だった場合は、削る
          e.target.value = value.slice(1)
          // 先頭が0でなくなるまで削る
          while (e.target.value.startsWith('0') && e.target.value !== '0') {
            e.target.value = e.target.value.slice(1)
          }
        }
      }
      if (value === '') {
        e.target.value = '0'
      }
      const newExpenses = [...expenses]
      newExpenses[index].amount = parseInt(e.target.value)
      setExpenses(newExpenses)
    }
  /**
   * ラベルの変更
   */
  const handleLabelChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      const newExpenses = [...expenses]
      newExpenses[index].label = value
      setExpenses(newExpenses)
    }

  /**
   * 初期化処理
   */
  const initialize = async () => {
    setExpenses([{ amount: 0, label: '', isincome: false, iid: '' }])
  }

  useEffect(() => {
    initialize()
  }, [])

  return (
    <div className="welcome mt-4">
      <h4 className="d-flex justify-content-center">1ヶ月お疲れ様です</h4>
      <h4 className="d-flex justify-content-center mt-3">
        新しい月が始まりました
      </h4>
      <div className="input-form mt-4">
        <label className="ml-1">収入は？</label>
        <div className="d-flex justify-content-center align-items-center mt-3 px-2">
          <input
            type="number"
            className="form-control"
            placeholder="収入は？"
            value={saving}
            onChange={(e) => changeSaving(e)}
          />
        </div>
        <div className="content-month-update">
          <label className="ml-1 mb-3">固定費は？</label>
          <div className="d-flex flex-column">
            {expenses.map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-center align-items-center mb-4"
              >
                <div>
                  <label>金額</label>
                  <div className="money d-flex flex-column mr-2">
                    <input
                      className="form-input"
                      type="number"
                      value={item.amount}
                      onChange={(e) => handleAmountChange(index)(e)}
                    />
                  </div>
                </div>
                <div>
                  <label>ラベル</label>
                  <div className="description d-flex flex-column">
                    <input
                      className="form-input"
                      type="text"
                      value={item.label}
                      onChange={(e) => handleLabelChange(index)(e)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-end mr-4">
            <button
              className="btn btn-primary px-5"
              onClick={() => addExpense(0, '', false)}
            >
              追加
            </button>
          </div>
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
