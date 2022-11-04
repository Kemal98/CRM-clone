import axios from 'axios'
import React from 'react'

const DeleteDisplay = ({ticketId}) => {
  const deleteTicket = async () => {
  const response = await axios.delete(`https://62cd63d5066bd2b69924c7ad.mockapi.io/ticket/${ticketId}`)
   const responseStatus = response.status
    const success = response.status == 200
    if(success)
      { window.location.reload()}
  }

  return (
    <div className="delete-block">
    <div className="delete-icon" onClick={deleteTicket}>✖</div>
    </div>
  )
}

export default DeleteDisplay