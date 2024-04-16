import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { userAtom } from './jotai/Atoms'
import './AddMoney.css'
import * as queries from './graphql/queries'
import * as mutations from './graphql/mutations'

import { generateClient } from 'aws-amplify/api'

const AddMoney: React.FC = () => {
  const navigate = useNavigate()
  const [user] = useAtom(userAtom)

  // 金額とラベルの状態を管理する object型配列のexpencseを定義
  const [expenses, setExpenses] = useState<
    {
      amount: number
      label: string
      isincome: boolean
      iid: string
    }[]
  >([])
  // 所持金
  const [money, setMoney] = useState(0)
  const [total, setTotal] = useState(0)
  const [resetDateRemaining, setResetDateRemaining] = useState(0)
  const [totals, setTotals] = useState({ spending: 0, income: 0 })

  /**
   * 今日の収支を取得する
   */
  const getTodayExpenses = async () => {
    const today = new Date().toISOString().slice(0, 10)
    const client = generateClient({
      authMode: 'userPool',
    })
    let todayExpenses
    try {
      todayExpenses = await client.graphql({
        query: queries.getDateExpenses,
        variables: { id: user.id, deid: today.replace(/-/g, '') },
      })
      if (todayExpenses.data.getDateExpenses === null) {
        return
      }
      //todayExpenses?.data?.getDateExpenses?.usedからamount, iid, isincome, labelを取り出してexpensesにセットする
      const todayData = todayExpenses?.data?.getDateExpenses
      const used = todayExpenses?.data?.getDateExpenses?.used
      const newExpenses = used?.map((item) => ({
        amount: item?.amount ? item.amount : 0,
        label: item?.label ? item.label : '',
        isincome: item?.isincome ? item.isincome : false,
        iid: item?.iid ? item.iid : '',
      }))
      setTotals({
        spending: todayData?.totalspending ? todayData.totalspending : 0,
        income: todayData?.totalincome ? todayData.totalincome : 0,
      })
      setExpenses(newExpenses ? newExpenses : [])
    } catch (err) {
      console.log('error get today expenses', err)
    }
  }
  /**
   * 金額とラベルを追加する関数
   */
  const addExpense = (amount: number, label: string, isincome: boolean) => {
    setExpenses([...expenses, { amount, label, isincome, iid: '' }])
  }
  /**
   * 収支の変更
   */
  const handleIsIncomeChange = (index: number, isincome: boolean) => {
    const value = !isincome
    const newExpenses = [...expenses]
    newExpenses[index].isincome = value
    setExpenses(newExpenses)
    calculateTotal()
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
      calculateTotal()
    }
  /**
   * 合計金額を計算する
   */
  const calculateTotal = () => {
    let totalExpense = 0
    expenses.forEach((item) => {
      if (item.isincome) {
        totalExpense -= item.amount
      } else {
        totalExpense += item.amount
      }
    })
    setTotal(totalExpense)
  }
  /**
   * 確定ボタンを押した時の処理
   */
  const submit = async () => {
    const client = generateClient({
      authMode: 'userPool',
    })
    const today = new Date().toISOString().slice(0, 10)
    let todayExpenses
    try {
      todayExpenses = await client.graphql({
        query: queries.getDateExpenses,
        variables: { id: user.id, deid: today.replace(/-/g, '') },
      })
    } catch (err) {
      console.log('error get today expenses', err)
      return
    }
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
    if (todayExpenses.data.getDateExpenses === null) {
      try {
        const input = {
          id: user.id,
          deid: today.replace(/-/g, ''),
          date: today,
          totalspending,
          totalincome,
          used: newExpenses ? newExpenses : [],
        }
        await client.graphql({
          query: mutations.createDateExpenses,
          variables: { input },
        })
      } catch (err) {
        console.log('error create date expenses', err)
      }
    } else {
      try {
        const input = {
          id: user.id,
          deid: today.replace(/-/g, ''),
          date: today,
          totalspending,
          totalincome,
          used: newExpenses ? newExpenses : [],
        }
        await client.graphql({
          query: mutations.updateDateExpenses,
          variables: { input },
        })
      } catch (err) {
        console.log('error update user', err)
      }
    }
    try {
      const req = {
        id: user.id,
        currentmoney: money - total,
      }
      await client.graphql({
        query: mutations.updateUser,
        variables: { input: req },
      })
    } catch (err) {
      console.log('error update user', err)
    }
  }

  /**
   * 初期化処理
   */
  const initialize = async () => {
    const today = new Date()
    // リセットまでの日付を計算する
    const getResetRemaining = () => {
      if (today.getDate() <= user.edate) {
        return user.edate - today.getDate()
      } else {
        // 今月の最終日を取得
        const lastDay = new Date(
          today.getFullYear(),
          today.getMonth() + 1,
          0
        ).getDate()
        return lastDay + user.edate - today.getDate()
      }
    }
    setResetDateRemaining(getResetRemaining())
    await getTodayExpenses()
  }

  useEffect(() => {
    if (user.id !== '') {
      initialize()
    }
  }, [user])

  useEffect(() => {
    if (!expenses || expenses.length === 0) {
      setExpenses([{ amount: 0, label: '', isincome: false, iid: '' }])
    }
  }, [expenses])

  useEffect(() => {
    if (totals.spending > 0 || totals.income > 0) {
      setMoney(user.currentmoney + totals.spending - totals.income)
      setTotal(totals.spending - totals.income)
    } else {
      setMoney(user.currentmoney)
      setTotal(user.currentmoney)
    }
  }, [totals, user])

  return (
    <div className="add-money">
      {/* 固定ヘッダー */}
      <div className="bg-light fixed-top header">
        {/* 別のページに遷移するボタン */}
        <div className="d-flex justify-content-end align-items-top mb-2">
          <button
            className="btn btn-outline-secondary mr-1"
            onClick={() => {
              navigate('/list-date-ex')
            }}
          >
            使用履歴確認
          </button>
        </div>
        {/* 今日の日付を表示する */}
        <h4 className="d-flex justify-content-center mb-3">
          {new Date().toLocaleDateString()}
        </h4>
        <h4 className="d-flex justify-content-center mb-3">
          リセットまであと{resetDateRemaining}日
        </h4>

        <div className="d-flex justify-content-center">
          <h4 className="money-pool">{money}円</h4>→
          <h4 className="money-pool ">{money - total}円</h4>
        </div>
        <div className="header-label-money d-flex justify-content-center add-money-label w-100">
          <div className="labels mt-2">
            <label className="form-label mr-2">金額</label>
            <label className="form-label">ラベル</label>
          </div>
        </div>
      </div>
      {/* 入力フォーム（金額） */}
      <div className="content">
        <div className="d-flex flex-column">
          {expenses.map((item, index) => (
            <div
              key={index}
              className="d-flex justify-content-center align-items-center mb-4"
            >
              <div className="mr-1">
                <button
                  className={`btn btn-${item.isincome ? 'success' : 'secondary'} btn-is-income`}
                  onClick={() => handleIsIncomeChange(index, item.isincome)}
                >
                  {item.isincome ? '収入' : '支出'}
                </button>
              </div>
              <div className="money d-flex flex-column mr-2">
                <input
                  className="form-input"
                  type="number"
                  value={item.amount}
                  onChange={(e) => handleAmountChange(index)(e)}
                />
              </div>
              <div className="description d-flex flex-column">
                <input className="form-input" type="text" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 固定フッター */}
      <div className="footer bg-light fixed-bottom d-flex justify-content-center align-items-center">
        <button
          className="btn btn-success px-5 mr-4"
          onClick={() => {
            submit()
          }}
        >
          確定
        </button>
        <button
          className="btn btn-primary px-5 "
          onClick={() => addExpense(0, '', false)}
        >
          追加
        </button>
      </div>
    </div>
  )
}

export default AddMoney
