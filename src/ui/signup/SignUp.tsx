import { useForm } from 'react-hook-form'
import {
  type InputElements,
  SignupSchema,
  // type SignUpTypes,
  type submissionType,
} from './types'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Eye,
  EyeOff,
  Mail,
  ShieldAlert,
  Lock,
  CircleUserRound,
} from 'lucide-react'
import {
  Link,
  useActionData,
  useLocation,
  useNavigation,
} from 'react-router-dom'
import { Label } from '../../components/ui/label'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { useState } from 'react'
import { Spinner } from '../../components/loading/Spinner'

export function SignUp() {
  // const submit = useSubmit()

  const {
    register,
    // trigger,
    // getValues,
    formState: { errors },
  } = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
  })

  // const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   const isValid = await trigger()
  //   if (isValid) {
  //     submit(getValues(), {
  //       method: 'post',
  //       action: '/signup',
  //     })
  //     //   if(stat)
  //   }
  // }

  return (
    <section className="w-screen h-screen flex bg-[#F5F5F5] flex-col justify-center items-center sm:p-0 p-3">
      <form
        // onSubmit={async e => onSubmit(e)}
        className="flex justify-center items-center max-w-[59.6rem] rounded-2xl shadow-xl mb-6"
      >
        <div className="py-8 px-14 flex flex-col gap-4 bg-white sm:w-full h-full rounded-r-xl">
          <Header />
          <InputElements register={register} errors={errors} />
          <Footer />
        </div>
      </form>
    </section>
  )
}

function Header() {
  return (
    <header className="font-poppins flex flex-col  mt-3 ">
      <img
        className="w-[4.6rem] h-[4.6rem] mb-3 sm:mx-2 "
        src="hctraLogo.png"
        alt="hctra-logo"
      />
      <h1 className="sm:text-xl text-[#343452] tracking-wide mt-2 px-2 text-base sm:-ml-0 -ml-2">
        Create an account
      </h1>
    </header>
  )
}

function InputElements({ register, errors }: InputElements) {
  const [showPwd, setShowPwd] = useState(false)
  const ShowPwdIcon = showPwd ? Eye : EyeOff

  const location = useLocation()
  const cohortId = new URLSearchParams(location.search).get('cohort-id')

  return (
    <main className="font-poppins flex flex-col justify-center gap-3 sm:px-2 sm:pr-7 ">
      <div className="relative flex flex-col gap-1 ">
        <Input
          autoComplete="off"
          type="text"
          // id="Full Name"
          {...register('full_name')}
          className="outline-none focus:bg-none border-[1.5px] border-[#ACB5BD] py-[24.5px] px-11 placeholder:text-xs "
          placeholder="Full Name" />
        <CircleUserRound className="absolute w-[1.1rem] h-[1.1rem] left-4 top-4  text-[#ACB5BD] peer-focus:text-[#605BFF]" />
        {errors.full_name && (
          <p className="flex text-red-500 gap-1">
            <ShieldAlert />
            <span>Name must contain atleast 4 characters</span>
          </p>
        )}
      </div>
      <div className="relative flex flex-col gap-1 ">
        <Input
          autoComplete="off"
          type="text"
          // id="Email Address"
          {...register('email')}
          className="outline-none focus:bg-none border-[1.5px] border-[#ACB5BD] py-[24.5px] px-11 placeholder:text-xs "
          placeholder="Email Address"/>
        <Mail className="absolute w-[1.1rem] h-[1.1rem] left-4 top-4  text-[#ACB5BD] peer-focus:text-[#605BFF]" />
        {errors.email && (
          <p className="flex text-red-500 gap-1">
            <ShieldAlert />
            <span>Invalid Username</span>
          </p>
        )}
      </div>
      <div className="relative flex flex-col gap-1">
        <Input
          type={!showPwd ? 'password' : 'text'}
          {...register('password')}
          autoComplete="off"
          className="outline-none focus:bg-none border-[1.5px] border-[#ACB5BD] py-[24.5px] px-11 placeholder:text-xs"
          // id="Password"
          placeholder="********" />
        <Lock className="absolute w-[1.1rem] h-[1.1rem] left-4 top-3.5 text-[#ACB5BD] peer-focus:text-[#605BFF]" />
        <ShowPwdIcon
          onClick={() => setShowPwd(!showPwd)}
          className="absolute w-[1.1rem] h-[1.1rem] right-4 top-4 cursor-pointer text-[#ACB5BD]"
        />
        {errors.password && (
          <p className="flex text-red-500 gap-1">
            <ShieldAlert />
            <span>Password must contain atleast 6 characters</span>
          </p>
        )}
      </div>
    </main>
  )
}

function Footer() {
  const submission = useActionData() as submissionType
  const navigation = useNavigation()
  return (
    <footer className="flex flex-col font-poppins gap-6 px-2 pr-7">
      <div className="flex justify-between items-center gap-3 mb-3">
        {navigation.state === 'submitting' ? (
          <Spinner className="text-center flex flex-row items-center justify-center w-full" />
        ) : (
          <Button className="w-full bg-[#605BFF] py-7 hover:bg-[#605BFF] tracking-wide font-poppins text-sm">
            Sign up
          </Button>
        )}
      </div>
      <p className="text-red-500">
        {!submission?.success ? submission?.error : ''}
      </p>
      <div className="flex flex-col sm:flex sm:flex-row items-center gap-1 text-xs pb-2 tracking-wider">
        <span className="text-[#141414]">Already have an account?</span>
        <Link to="/login" className="font-bold tracking-wide text-[#702DFF]">
          Login
        </Link>
      </div>
    </footer>
  )
}


