import React from 'react'
import './StatusListC.css'
import Statusitem from './Statusitem'

function StatusList(props) {
    const statusList = props.statusList
    const currentIncome = props.currentIncome
    const filterStatus = statusList.filter(e => e.history === currentIncome)
    
    let contentList = filterStatus.map(e => <Statusitem
      editHandler={props.editHandler}
      deleteHandler={props.deleteHandler}
      id={e.id}
      key={e.id}
      cost={e.cost}
      category={e.category}
      history={e.history}
      pay={e.pay}
      />)

    if(contentList.length === 0){
      contentList = <div>not found</div>
     }

  return (
    <div className='tdl-container'>
        {contentList}
    </div>
  )
}

export default StatusList