import { useState } from "react"
import NewStatusitem from "./components/NewStatusitem";
import ShowCase from "./components/ShowCase";
import StatusList from "./components/StatusList";

let lastId = 5;

function uniqueId() {
  lastId = lastId + 1;
  return lastId;
}

const INITIAL_TEST = [
  { id: 1, cost: "200", category: "ค่าอาหาร", history: "รายจ่าย", pay: "เงินสด" },
  { id: 2, cost: "120", category: "ค่าเดินทาง", history: "รายจ่าย", pay: "เงินสด" },
  { id: 3, cost: "477", category: "ค่าน้ำ-ไฟ", history: "รายจ่าย", pay: "บัตรเครดิต" },
  { id: 4, cost: "5000", category: "ค่าห้อง", history: "รายจ่าย", pay: "บัตรเครดิต" },
  { id: 5, cost: "17000", category: "เงินเดือน", history: "รายรับ", pay: "บัตรเครดิต" },
];

function App() {

  const [isShow, setIsShow] = useState(false)
  const [statusList, setStatusList] = useState(INITIAL_TEST)
  const [currentIncome, setCurrentIncome] = useState('รายรับ')

  //Add newstatus
  const addStatusHandler = (newStatusData) => {
    const newStatus = {
      ...newStatusData,
      id: uniqueId(),
    }
    setStatusList([newStatus, ...statusList])
  }

  //Del status
  const deleteHandler = (id) => {
    const newTodoList = statusList.filter((e) => e.id !== id )
    setStatusList(newTodoList)
  }

  const editHandler = (id, status) => {
    //clone
    const newstatusList = [...statusList]

    //update and Find target
    const idx = statusList.findIndex((e) => e.id === id)
    newstatusList[idx] = {...status}

    //set state
    setStatusList(newstatusList)
  }

  return (
    <div className="h-screen container mx-auto text-center flex">
    <div className="m-auto justify-center">
      {isShow?<div className="m-5"><NewStatusitem setIsShow={setIsShow} setStatusList={setStatusList} addStatusHandler={addStatusHandler} /></div>:<button style={{marginBottom:'15px'}} onClick={() => setIsShow(true)} className="bg-blue-500 p-5 rounded-lg hover:bg-blue-600 hover:text-white">กดเพื่อเริ่มทำรายการ</button>}
      <hr/>
      <ShowCase value={currentIncome} onChange={ e => setCurrentIncome(e.target.value)} />
      <StatusList editHandler={editHandler} deleteHandler={deleteHandler} currentIncome={currentIncome} statusList={statusList} />
    </div>
  </div>
  )
}

export default App
