import {useForm, type SubmitHandler} from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const userFieldsSchema=z.object({
  email:z.string().email(),
  password:z.string().min(8)
})

type UserFields=z.infer<typeof userFieldsSchema>

const Login = () => {

  const {register,handleSubmit,formState:{errors}}=useForm<UserFields>({
    resolver:zodResolver(userFieldsSchema)
  })


  const onSubmit:SubmitHandler<UserFields>=(data)=>{
     console.log(data);
  }


  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
        <label htmlFor="">Email:</label>
        <input 
           type="email" 
           {...register("email")}
        />
        {errors.email && <div className="mt-1 text-sm text-red-600">{errors.email.message}</div>}
        <label htmlFor="">Password:</label>
        <input 
          type="password" 
          {...register("password")}
        />
        {errors.password && <div className="mt-1 text-sm text-red-600">{errors.password.message}</div>}
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Login