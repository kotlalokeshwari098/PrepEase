import {useForm, type SubmitHandler} from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import  axiosInstance  from '../api/axios.ts'
import { useNavigate } from 'react-router-dom'

const userFieldsSchema=z.object({
  username:z.string(),
  password:z.string().min(8)
})

type UserFields=z.infer<typeof userFieldsSchema>

const Login = () => {

  const {register,handleSubmit,formState:{errors},reset}=useForm<UserFields>({
    resolver:zodResolver(userFieldsSchema)
  })
  const navigate=useNavigate();


  const onSubmit:SubmitHandler<UserFields>=async(data)=>{
     try {
        const response=await axiosInstance.post("/authenticate",data);
        // console.log(response)
        if(response.status===200){
          alert("Login successfull!!");
          setTimeout(()=>{
            reset();
          },1000)
          localStorage.setItem('token',response?.data)
          navigate("/dashboard");
        }
     } catch (error) {
        console.log(error);
     }
  }


  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
        <label htmlFor="">Username:</label>
        <input 
           type="text" 
           {...register("username")}
        />
        {errors.username && <div className="mt-1 text-sm text-red-600">{errors.username.message}</div>}
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