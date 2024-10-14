import * as z from 'zod'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'

export const SignupSchema = z.object({
  full_name: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(6),
  cohort_id: z.string().nullable()
})

export type submissionType = {
  success: string
  error: string
}

export type InputElements = {
  register: UseFormRegister<z.infer<typeof SignupSchema>>
  errors: FieldErrors<z.infer<typeof SignupSchema>>
}

export type SignUpTypes = {
  id: number
  srcImg: string
  text: string
}
