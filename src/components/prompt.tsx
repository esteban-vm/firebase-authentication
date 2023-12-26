import type { FC } from 'react'
import { useEffect, useRef } from 'react'
import { FaXmark } from 'react-icons/fa6'

interface PromptProps {
  isOpen: boolean
  handler: () => void
}

const Prompt: FC<PromptProps> = ({ isOpen, handler }) => {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (isOpen) ref.current?.showModal()
  }, [isOpen])

  const handleClose = () => {
    handler()
    ref.current!.close()
  }

  const handleCancel = () => {
    handler()
    ref.current!.close()
  }

  return (
    <dialog ref={ref} className='prompt' onClose={handleClose}>
      <form method='dialog'>
        <label htmlFor='password-reset'>Password Reset</label>
        <input type='email' id='password-reset' placeholder='Email' />
        <button type='submit'>Done</button>
        <button type='button' onClick={handleCancel}>
          <FaXmark /> Cancel
        </button>
      </form>
    </dialog>
  )
}

export default Prompt
