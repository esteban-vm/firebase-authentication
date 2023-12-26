import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import { useForm } from '@/hooks'

const Login: FC = () => {
  const { submit, fields, errors } = useForm()

  return (
    <form className='authentication' onSubmit={submit} noValidate>
      <button type='button' className='button'>
        Login with Google
      </button>
      <hr />
      <div className='control'>
        <input type='email' placeholder='email@example.com' {...fields.email} />
        {errors.email && <small>{errors.email}</small>}
      </div>
      <div className='control'>
        <input type='password' placeholder='*******' minLength={6} maxLength={12} {...fields.password} />
        {errors.password && <small>{errors.password}</small>}
      </div>
      <button type='submit' className='button'>
        Login with Email
      </button>
      <hr />
      <Link to='/register' className='button'>
        Don&apos;t have an Account?
        <FaArrowRight />
        Register
      </Link>
      <hr />
      <button type='button' className='button'>
        Forgot Password?
      </button>
    </form>
  )
}

export default Login
