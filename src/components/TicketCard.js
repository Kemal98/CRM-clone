import React from 'react'
import { Link } from 'react-router-dom'
import PriorityDisplay from '../components/PriorityDisplay'
import ProgressDisplay from '../components/ProgressDisplay'
import StatusDisplay from '../components/StatusDisplay'
import AvatarDisplay from '../components/AvatarDisplay'
import DeleteDisplay from '../components/DeleteDisplay'

const TicketCard = ({ color, ticket }) => {

return (
    <div className="ticket-card">
    <div className="ticket-color" style={{ backgroundColor: color }}></div>
      <Link to={`/ticket/${ticket.documentId}`} id="link">
        <h3>{ticket.title}</h3>
        <AvatarDisplay ticket={ticket} />
        <StatusDisplay status={ticket.status} />
        <PriorityDisplay priority={ticket.priority} />
        <ProgressDisplay progress={ticket.progress}/>
      </Link>
       <DeleteDisplay ticketId={ticket.documentId}/>
    </div>
  )
}

export default TicketCard