import React from 'react'

const AvatarDisplay = ({ ticket }) => {
  const blankAvatar = "https://github.com/kubowania/monday-crm-clone/blob/main/src/images/blank-profile.png?raw=true"
return (
    <div className='avatar-container'>
      <div className='img-container'>
        <img src={ticket.avatar ? ticket.avatar : blankAvatar} />
      </div>
    </div>
  )
}

export default AvatarDisplay