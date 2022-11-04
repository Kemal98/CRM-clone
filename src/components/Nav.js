import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()

  return (
    <nav>
      <div className="logo-container" onClick={() => navigate('/')}>
        <img src="https://github.com/kubowania/monday-crm-clone/blob/main/src/images/crm-logo.png?raw=true" alt="logo" />
      </div>
      <div className="controls-container">
        <div className="icon" onClick={() => navigate('/ticket')}>➕</div>
        <div className="icon" onClick={() => navigate('/')}>❮❮</div>
      </div>
    </nav>
  )
}

export default Nav