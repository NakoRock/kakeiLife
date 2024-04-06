import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'aws-amplify/auth'
import './AddMoney.css'

const AddMoney: React.FC = () => {
  const navigate = useNavigate()

  const trySignOut = async () => {
    await signOut()
  }

  // 金額とラベルの状態を管理する object型配列のexpencseを定義
  const [expenses, setExpenses] = useState<{ amount: number; label: string }[]>(
    []
  )
  // 所持金
  const [money, setMoney] = useState(110000)

  // expenseのamountの合計を常に計算する
  const total = expenses.reduce((acc, cur) => acc + cur.amount, 0)

  // 次の15日までの日数を計算する
  const today = new Date()
  // 今日が今月の15日より前の場合
  const daysRemained =
    today.getDate() <= 15 ? (
      <h4 className="d-flex justify-content-center mb-3">
        リセットまであと{15 - today.getDate()}日
      </h4>
    ) : (
      // 今日が今月の15日より後の場合
      <h4 className="d-flex justify-content-center mb-3">
        リセットまであと{45 - today.getDate()}日
      </h4>
    )
  // リセットまでの日付
  const resetDate = new Date(today)
  resetDate.setDate(15)
  // 今日からリセットまでの日数
  const days = Math.ceil((resetDate.getTime() - today.getTime()) / 86400000)

  // money / days
  const daily = money / days

  // expensesの初期値を１つ追加
  if (expenses.length === 0) {
    setExpenses([{ amount: 0, label: '' }])
  }

  // 金額とラベルを追加する関数
  const addExpense = (amount: number, label: string) => {
    setExpenses([...expenses, { amount, label }])
  }

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

  return (
    <div className="add-money">
      {/* 固定ヘッダー */}
      <div className="bg-light fixed-top header">
        {/* 今日の日付を表示する */}
        <h4 className="d-flex justify-content-center mb-3">
          {new Date().toLocaleDateString()}
        </h4>
        {daysRemained}

        <div className="d-flex justify-content-center">
          <h4 className="money-pool">{money}円</h4>→
          <h4 className="money-pool ">{money - total}円</h4>
        </div>
      </div>
      {/* 入力フォーム（金額） */}
      <div className="content">
        <div className="d-flex flex-column">
          {expenses.map((item, index) => (
            <div key={index} className="d-flex justify-content-center">
              <div className="money d-flex flex-column mr-3">
                <label className="form-label">金額</label>{' '}
                <input
                  className="form-input"
                  type="number"
                  value={item.amount}
                  onChange={(e) => handleAmountChange(index)(e)}
                />
              </div>
              <div className="description d-flex flex-column">
                <label className="form-label">ラベル</label>{' '}
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
            trySignOut()
          }}
        >
          確定
        </button>
        <button
          className="btn btn-primary px-5 "
          onClick={() => addExpense(0, '')}
        >
          追加
        </button>
      </div>
    </div>
  )
}

export default AddMoney
