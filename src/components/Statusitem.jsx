import React, { useState } from 'react'
import './StatusitemC.css'

function Statusitem(props) {
    const cost = props.cost
    const category = props.category
    const history = props.history
    const pay = props.pay

    const [isEdit, setIsEdit] = useState(false)

    const [curCost, setCurCost] = useState(cost)
    const [curCategory, setCurCategory] = useState(category)
    const [curHistory, setCurHistory] = useState(history)
    const [curPay, setCurPay] = useState(pay)

    const onClickEdit = () => {
        setIsEdit(true)
        setCurCost(curCost)
    }

    const onClickDone = () => {
        const editValues = {
            id: props.id,
            cost: curCost,
            category: curCategory,
            history: curHistory,
            pay: curPay
        }
        props.editHandler(props.id, editValues)
        setIsEdit(false)
    }
    if(isEdit){
        return(
            <div className="form-control-ed">
                <div>
                <input className="input-container" type='number' placeholder='ระบุจำนวนเงิน' min='1' step='1' value={curCost} onChange={(e) => setCurCost(e.target.value)} />
                <input className="input-container" type='text' placeholder='ระบุหมวดหมู่' value={curCategory} onChange={(e) => setCurCategory(e.target.value)} />
                </div>
                <div>
                <select className="select-container" value={curHistory} onChange={(e) => setCurHistory(e.target.value)}>
                    <option value="รายจ่าย">รายจ่าย</option>
                    <option value="รายรับ">รายรับ</option>
                </select>
                </div>
                <div>
                <select className="select-container" value={curPay} onChange={(e) => setCurPay(e.target.value)}>
                    <option value="เงินสด">เงินสด</option>
                    <option value="บัตรเครดิต">บัตรเครดิต</option>
                </select>
                </div>
                <div className="ed-container-ed">
                    <button onClick={onClickDone} >Done</button>
                </div>
                <div className="dl-container-ed">
                    <button onClick={() => setIsEdit(false)}>Cancel</button>
                </div>
            </div>
        )
    }

  return (
    <div className="form-control">
      <div className="cb-container">{cost}</div>
      <div className="cb-container">{category}</div>
      <div className="cb-container">{pay}</div>
      <div className="ed-container">
        <button onClick={onClickEdit} >Edit</button>
      </div>
      <div className="dl-container">
        <button onClick={() => props.deleteHandler(props.id)}>Delete</button>
      </div>
    </div>
  )
}

export default Statusitem