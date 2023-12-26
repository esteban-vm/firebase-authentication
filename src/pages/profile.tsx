import type { FC } from 'react'
import { useState } from 'react'
import { FaLock, FaRightFromBracket } from 'react-icons/fa6'
import { Prompt } from '@/components'

const Profile: FC = () => {
  const [promptOpen, setPromptOpen] = useState(false)

  return (
    <>
      <section className='profile'>
        <img src='images/avatar.png' alt='user avatar' />
        <span>email@example.com</span>
        <div>
          <button type='button' onClick={() => setPromptOpen(true)}>
            Change Password
            <FaLock />
          </button>
          <button type='button'>
            Logout
            <FaRightFromBracket />
          </button>
        </div>
      </section>
      <Prompt isOpen={promptOpen} handler={() => setPromptOpen(false)} />
    </>
  )
}

export default Profile
