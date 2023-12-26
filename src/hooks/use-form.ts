import type { InferType } from 'yup'
import type { SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string, ref } from 'yup'

const validationSchema = object().shape({
  email: string().trim().required('${path} is required').email('${path} must be valid'),
  password: string()
    .trim()
    .required('${path} is required')
    .min(6, '${path} should be at least ${min} characters long')
    .max(12, '${path} should be at most ${max} characters long'),
  confirmPassword: string().oneOf([ref('password')], "passwords don't match"),
})

type FormValues = InferType<typeof validationSchema>

const defaultValues: FormValues = {
  email: '',
  password: '',
}

const useCustomForm = () => {
  const [values, setValues] = useState<FormValues>(defaultValues)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues,
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    reset()
    setValues(data)
  }

  return {
    values,
    submit: handleSubmit(onSubmit),
    submitted: isSubmitSuccessful,
    fields: {
      email: register('email'),
      password: register('password'),
      confirmPassword: register('confirmPassword'),
    },
    errors: {
      email: errors.email?.message,
      password: errors.password?.message,
      confirmPassword: errors.confirmPassword?.message,
    },
  }
}

export default useCustomForm
