import React from 'react'

const PriorityDisplay = ({priority}) => {
  return (
    <div className='priority-display'>
      <div className='star-container'>
        <h3 style={{ fontSize:"1.9rem",color:priority >= 1 ?'rgba(255,253,150)': ""}}>*</h3>
        <h3 style={{fontSize:"1.9rem",color:priority >= 2 ?'rgba(255,253,150)': ""}}>*</h3>
        <h3 style={{fontSize:"1.9rem",color:priority >= 3 ?'rgba(255,253,150)': ""}}>*</h3>
        <h3 style={{fontSize:"1.9rem",color:priority >= 4 ?'rgba(255,253,150)': ""}}>*</h3>
        <h3 style={{fontSize:"1.9rem",color:priority >= 5 ?'rgba(255,253,150)': ""}}>*</h3>
      </div>
    </div>
  )
}

export default PriorityDisplay