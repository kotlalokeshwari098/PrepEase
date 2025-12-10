import {useForm, type SubmitHandler} from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import  axiosInstance  from '../api/axios.ts'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import {showToast} from '../features/ui/uiSlice.ts'
import { userProfile } from '../features/auth/authSlice.ts'


const userFieldsSchema=z.object({
  username:z.string().min(3, "Username must be at least 3 characters"),
  password:z.string().min(6, "Password must be at least 6 characters")
})

type UserFields=z.infer<typeof userFieldsSchema>

const Login = () => {

  const {register,handleSubmit,formState:{errors,isSubmitting},reset}=useForm<UserFields>({
    resolver:zodResolver(userFieldsSchema)
  })
  const navigate=useNavigate();
  const dispatch=useDispatch();


  const onSubmit:SubmitHandler<UserFields>=async(data)=>{
     try {
        const response=await axiosInstance.post("/api/auth/authenticate",data);
        console.log(response)
        if(response.status===200){
          const token=response.data;

          localStorage.setItem('token',response?.data)

          dispatch(showToast({ type: 'success', message: 'Login successfully!' }));

          const response1=await axiosInstance.get("/user/profile",{
           headers:{
            Authorization:`Bearer ${token}`
           }
          });

          dispatch(userProfile(response1.data))
          
          localStorage.setItem("userInfo", JSON.stringify(response1.data));
         
          setTimeout(()=>{
            reset();
            navigate("/dashboard");
          },1000)
        }
     } catch (error) {
        console.log(error);
        dispatch(showToast({ type: 'error', message: 'Login failed. Please check your credentials.' }));
     }
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-semibold text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input 
                id="username"
                type="text" 
                {...register("username")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Enter your username"
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input 
                id="password"
                type="password" 
                {...register("password")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>

            <button 
              type='submit'
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {isSubmitting ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login