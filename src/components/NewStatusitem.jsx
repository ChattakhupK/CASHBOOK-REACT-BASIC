import React, { useState } from 'react'
import './NewStatusitemC.css'

function NewStatusitem(props) {
    const [currentCost, setCurrentCost] = useState('')
    const [currentCat, setCurrentCat] = useState('')
    const [currentIncome, setCurrentIncome] = useState('รายจ่าย')
    const [currentPay, setCurrentPay] = useState('เงินสด')

    const submitHandler = (e) => {
        e.preventDefault()
        const newStatus = {
            cost: currentCost,
            category: currentCat,
            history: currentIncome,
            pay: currentPay,
        }

        props.addStatusHandler(newStatus)

        setCurrentCost("");
        setCurrentCat("ค่าอาหาร");
        setCurrentIncome("รายจ่าย");
        setCurrentPay("เงินสด");
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="NewContainer flex items-center">
        <div className="StatusInput">
          <label>ราคา</label>
          <input placeholder='ระบุจำนวนเงิน' type="number" min='1' step='1' onChange={(e) => setCurrentCost(e.target.value)} value={currentCost}/>
        </div>
        <div className="StatusInput">
          <label>หมวดหมู่</label>
          <input placeholder='ระบุหมวดหมู่' type="text" onChange={(e) => setCurrentCat(e.target.value)} value={currentCat}/>
        </div>
        <div className="StatusInput">
          <label>รายรับ-จ่าย</label>
          <select onChange={(e) => setCurrentIncome(e.target.value)} value={currentIncome}>
            <option value="รายจ่าย">รายจ่าย</option>
            <option value="รายรับ">รายรับ</option>
          </select>
        </div>
        <div className="StatusInput">
          <label>การชำระเงิน</label>
          <select onChange={(e) => setCurrentPay(e.target.value)} value={currentPay}>
            <option value="เงินสด">เงินสด</option>
            <option value="บัตรเครดิต">บัตรเครดิต</option>
          </select>
        </div>
        <hr />
        <div className="btn">
          <button type="submit">เพิ่ม</button>
        </div>
        <div className="btn">
          <button onClick={() => props.setIsShow(false)} type="button">ยกเลิก</button>
        </div>
      </div>
    </form>
  )
}

export default NewStatusitem