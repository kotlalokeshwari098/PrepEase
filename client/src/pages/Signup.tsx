import {useForm, type SubmitHandler} from "react-hook-form";
import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import  axiosInstance  from '../api/axios.ts'

//ZOD schema validations for the form fields
const userFormSchema=z.object({
  email:z.string().email(),
  password:z.string().min(8),
  username:z.string().min(4)
})

//types of the form fields
type UserForm=z.infer<typeof userFormSchema>;


const Signup = () => {
  const {
    handleSubmit,
    register,
    formState:{errors,isSubmitting},
    setError,
    reset
  }
    =useForm<UserForm>({
      defaultValues:{
        email:""
      },
      resolver:zodResolver(userFormSchema)
    });

  const onSubmit:SubmitHandler<UserForm>=async(data)=>{
    try {
      const result=await axiosInstance.post("/register",data);
      if(result.status==201){
        console.log("resgistered successfully")
        setTimeout(()=>{
          alert("Registered successfullyy!!");
          reset();
        },1000)
      }
    } catch (error) {
      console.log(error);
      setError("root",{
        message:"This email is already taken!!"
      })
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">Join PrepEase and start your preparation journey</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6 bg-white p-8 shadow-lg rounded-lg">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input 
                id="email"
                type="email"
                {...register("email")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 border"
              />
              {errors.email && <div className="mt-1 text-sm text-red-600">{errors.email.message}</div>}
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                id="password"
                type="password"
                {...register("password")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 border"
              />
              {errors.password && <div className="mt-1 text-sm text-red-600">{errors.password.message}</div>}
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input 
                id="username"
                type="text"
                {...register("username")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 border"      
              />
              {errors.username && <div className="mt-1 text-sm text-red-600">{errors.username.message}</div>}
            </div>
          </div>

          <div>
            <button 
              disabled={isSubmitting} 
              type="submit" 
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 transition-colors duration-200"
            >
              {isSubmitting ? "Submitting..." : "Sign up"}
            </button>
          </div>
          
          {errors.root && <div className="p-3 text-center text-sm bg-red-50 text-red-700 rounded-md">{errors.root.message}</div>}
          
          <div className="text-center text-sm">
            <p className="text-gray-600">
              Already have an account? 
            
              <Link to='/login' className="font-medium text-blue-600 hover:text-blue-500">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup