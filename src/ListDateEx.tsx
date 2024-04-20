import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'aws-amplify/auth'
import { useAtom } from 'jotai'
import { userAtom } from './jotai/Atoms'
import { loginAtom } from './jotai/Atoms'
import './ListDateEx.css'
import * as queries from './graphql/queries'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

import { generateClient } from 'aws-amplify/api'

const ListDateEx: React.FC = () => {
  const navigate = useNavigate()
  const [user] = useAtom(userAtom)
  const [, setLogin] = useAtom(loginAtom)
  // 金額とラベルの状態を管理する object型配列のexpencseを定義
  const [expenses, setExpenses] = useState<
    {
      amount: string
      label: string
    }[]
  >([])
  // 所持金
  const today = new Date().toISOString().slice(0, 10)
  const [date, setDate] = useState(today)
  const [total, setTotal] = useState(0)

  /**
   * 日の収支を取得する
   */
  const getDayExpenses = async () => {
    const client = generateClient({
      authMode: 'userPool',
    })
    let todayExpenses
    try {
      todayExpenses = await client.graphql({
        query: queries.getDateExpenses,
        variables: { id: user.id, deid: date.replace(/-/g, '') },
      })
      if (todayExpenses.data.getDateExpenses === null) {
        setExpenses([])
        setTotal(0)
        return
      }
      const todayData = todayExpenses?.data?.getDateExpenses
      const used = todayExpenses?.data?.getDateExpenses?.used
      const newExpenses = used?.map((item) => ({
        amount: item?.amount
          ? item?.isincome
            ? '-' + String(item.amount) + '円'
            : String(item.amount) + '円'
          : '0' + '円',
        label: item?.label ? item.label : 'ラベルなし',
        isincome: item?.isincome ? item.isincome : false,
        iid: item?.iid ? item.iid : '',
      }))
      const spending = todayData?.totalspending ? todayData.totalspending : 0
      const income = todayData?.totalincome ? todayData.totalincome : 0
      setTotal(spending - income)
      setExpenses(newExpenses ? newExpenses : [])
    } catch (err) {
      console.log('error get today expenses', err)
    }
  }
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
  }
  const trySignOut = async () => {
    await signOut()
    setLogin(false)
    navigate('/')
  }
  useEffect(() => {
    getDayExpenses()
  }, [user, date])

  return (
    <div className="list-date-ex">
      <div className="bg-light fixed-top header-list-date">
        {/* 別のページに遷移するボタン */}
        <div className="d-flex justify-content-between align-items-top mb-4">
          <button
            className="btn btn-outline-secondary ml-1"
            onClick={() => {
              navigate('/addmoney')
            }}
          >
            入力画面に戻る
          </button>
          <button
            className="btn btn-outline-danger mr-1"
            onClick={() => {
              trySignOut()
            }}
          >
            ログアウト
          </button>
        </div>

        <div className="d-flex justify-content-center mb-3">
          <h4 className="money-pool">当月残り{user.currentmoney}円</h4>
        </div>
        {/* 日付を選択 */}
        <div className="d-flex justify-content-center mb-3 px-3">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => handleDateChange(e)}
          />
        </div>
      </div>
      <div className="content-list-date">
        <div className="mb-3 px-3">選択した日付の使用金額が確認できます</div>
        <DataTable value={expenses} tableStyle={{}}>
          {/* 金額が右寄せにする */}
          <Column field="amount" header="使用金額"></Column>
          {/* ラベルが空の場合は、ラベルなしと表示する */}
          <Column field="label" header="ラベル"></Column>
        </DataTable>
      </div>
      {/* 固定フッター */}
      <div className="footer bg-light fixed-bottom d-flex justify-content-center align-items-center">
        {/* 総額 */}
        <div className="font-weight-bold">総額： {total}円</div>
      </div>
    </div>
  )
}

export default ListDateEx
