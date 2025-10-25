import {useForm, type SubmitHandler} from "react-hook-form";
import  {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import axiosInstance from "../api/axios";


const inputSchema=z.object({
    subjectName:z.string().min(2,"Subject name must be at least 2 characters long"),
    year:z.number().min(1900).max(new Date().getFullYear()),
    branch:z.string().min(2,"Branch must be at least 2 characters long"),
    university:z.string().min(5,"University must be at least 5 characters long"),
    file:z.instanceof(File).refine((file)=>file.size<=5*1024*1024,"File size must be less than 5MB")
})

//types of the form fields
type InputForm=z.infer<typeof inputSchema>;

interface UploadProps {
  onClose: () => void;
  type:string;
}

const Upload = ({ onClose,type }: UploadProps) => {

    const {
        handleSubmit,
        register,
        formState:{errors,isSubmitting},
        setError,
        reset
      }
        =useForm<InputForm>({
          resolver:zodResolver(inputSchema)
        });

  const onSubmit:SubmitHandler<InputForm>=async(data)=>{
    try {
      const result=await axiosInstance.post("/uploadQuestionPaper",data);
      if(result.status==201){
        console.log("Submitted successfully")
        setTimeout(()=>{
          alert("Submitted successfully!!");
          reset();
        },1000)
      }
    } catch (error) {
      console.log(error);
      setError("root",{
        message:"Error uploading the file. Please try again."
      })
    }
  }
  return (
    <div className="fixed inset-0 h-full w-full z-50">
      <div className="relative top-10 mx-auto max-w-2xl">
        <div className="bg-white rounded-xl shadow-lg p-8 m-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Upload {type==='questionpaper' ? 'Question Paper' : 'Notes'}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject Name
                </label>
                <input
                  type="text"
                  {...register("subjectName")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="Enter subject name"
                />
                {errors.subjectName && (
                  <p className="mt-1 text-sm text-red-600">{errors.subjectName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Year
                </label>
                <input
                  type="number"
                  {...register("year", { valueAsNumber: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="Enter year"
                />
                {errors.year && (
                  <p className="mt-1 text-sm text-red-600">{errors.year.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Branch
                </label>
                <input
                  type="text"
                  {...register("branch")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="Enter branch"
                />
                {errors.branch && (
                  <p className="mt-1 text-sm text-red-600">{errors.branch.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  University
                </label>
                <input
                  type="text"
                  {...register("university")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="Enter university name"
                />
                {errors.university && (
                  <p className="mt-1 text-sm text-red-600">{errors.university.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload File
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                      <span>Upload a file</span>
                      <input
                        type="file"
                        {...register("file")}
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF up to 5MB</p>
                </div>
              </div>
              {errors.file && (
                <p className="mt-1 text-sm text-red-600">{errors.file.message}</p>
              )}
            </div>

            {errors.root && (
              <div className="rounded-md bg-red-50 p-4">
                <p className="text-sm text-red-600">{errors.root.message}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                `Upload ${type==='questionpaper' ? 'Question Paper' : 'Notes'}`
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;