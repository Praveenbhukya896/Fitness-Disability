// import { useActionData } from 'react-router-dom'
// import { z } from 'zod'
// import { Auth } from '../../auth'
// import { useLogin } from './state'
// import React from 'react'

// export const LoginResponse = z
//   .discriminatedUnion('success', [
//     z.object({ success: z.literal(true), data: Auth }),
//     z.object({ success: z.literal(false), error: z.string() }),
//   ])
//   .or(z.undefined())

// export function useUserLogin() {
//   const actionData = LoginResponse.parse(useActionData())
//   const login = useLogin()

//   React.useEffect(() => {
//     if (actionData?.success) {
//       login(actionData.data)
//     }
//   }, [actionData, login])

//   return actionData
// }
