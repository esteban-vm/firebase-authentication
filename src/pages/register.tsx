import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import { useForm } from '@/hooks'

const Register: FC = () => {
  const { submit, fields, errors } = useForm()

  return (
    <form className='authentication' onSubmit={submit} noValidate>
      <button type='button' className='button'>
        Register with Google
      </button>
      <hr />
      <div className='control'>
        <input type='email' placeholder='your email' {...fields.email} />
        {errors.email && <small>{errors.email}</small>}
      </div>
      <div className='control'>
        <input type='password' placeholder='password' minLength={6} maxLength={12} {...fields.password} />
        {errors.password && <small>{errors.password}</small>}
      </div>
      <div className='control'>
        <input type='password' placeholder='confirm password' {...fields.confirmPassword} />
        {errors.confirmPassword && <small>{errors.confirmPassword}</small>}
      </div>
      <button type='submit' className='button'>
        Register with Email
      </button>
      <hr />
      <Link to='/login' className='button'>
        Already have an Account?
        <FaArrowRight />
        Login
      </Link>
    </form>
  )
}

export default Register
