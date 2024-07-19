import React from 'react'
type UserChatItemProps = {
    text: string
}
const UserChatItem = ({text}: UserChatItemProps) => {
  return (
    <div className='p-2 border'>
      <p>{text}</p>
    </div>
  )
}

export default UserChatItem
