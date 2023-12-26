import type { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { FaHouse, FaUser, FaUserPlus, FaRightToBracket } from 'react-icons/fa6'

const linkStyle = ({ isActive }: { isActive: boolean }) => {
  let className: string
  if (isActive) className = 'scale-95'
  else className = 'scale-100'
  return className
}

const Navigation: FC = () => {
  return (
    <nav className='navigation'>
      <NavLink to='/' className={linkStyle} title='home'>
        <FaHouse />
      </NavLink>
      <NavLink to='/login' className={linkStyle} title='login'>
        <FaRightToBracket />
      </NavLink>
      <NavLink to='/register' className={linkStyle} title='register'>
        <FaUserPlus />
      </NavLink>
      <NavLink to='/profile' className={linkStyle} title='profile'>
        <FaUser />
      </NavLink>
    </nav>
  )
}

export default Navigation
