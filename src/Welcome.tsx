import React, { useState } from 'react'
import './Welcome.css'

const Welcome: React.FC = () => {
  return (
    <div className="welcome mt-4">
      <h4 className="d-flex justify-content-center">ようこそ</h4>
      <h4 className="d-flex justify-content-center mt-3">
        最初の設定をしましょう
      </h4>
      <div className="input-form mt-4">
        <div className="d-flex justify-content-center align-items-center mt-3 px-2">
          <input
            type="number"
            className="form-control"
            placeholder="今現在の貯金額"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div className="d-flex flex-column align-items-start mt-3 px-2">
          <input
            type="number"
            className="form-control"
            placeholder="今月使っても良い金額"
            onChange={(e) => console.log(e.target.value)}
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
            onChange={(e) => console.log(e.target.value)}
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
        <button className="btn btn-success px-5 ">確定</button>
      </div>
    </div>
  )
}

export default Welcome
