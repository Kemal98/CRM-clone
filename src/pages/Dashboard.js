import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import TicketCard from '../components/TicketCard'
import CategoryContext from '../context'

const Dashboard = () => {

const [tickets, setTickets] = useState([])
const {categories, setCategories} = useContext(CategoryContext)

  useEffect(() => {
    axios.get("https://62cd63d5066bd2b69924c7ad.mockapi.io/ticket").then((response) => 
    setTickets(response.data))
    .catch((error) => console.log(error))
  },[])

  useEffect(() => {
    setCategories([...new Set(tickets?.map(({ category }) => category))])
  }, [tickets])

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category))
  ]


  const colors = [
    'rgb(255,179,186)',
    'rgb(255,223,186)',
    'rgb(255,255,186)',
    'rgb(186,255,201)',
    'rgb(186,225,255)',
  ]


  return (
    <div className="dashboard">
      <h1>Customer relationship management</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    name={categoryIndex}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  )
}

export default Dashboard