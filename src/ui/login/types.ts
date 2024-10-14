import * as z from 'zod'
import { LoginSchema } from './Login'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'

export type InputElements = {
  register: UseFormRegister<z.infer<typeof LoginSchema>>
  errors: FieldErrors<z.infer<typeof LoginSchema>>
}

export type LoginTypes = {
  id: number
  srcImg: string
  text: string
}
