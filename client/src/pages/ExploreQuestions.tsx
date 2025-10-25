import { useState } from "react"
import Upload from "../components/Upload.tsx";



const ExploreQuestions = () => {
  const [upload, setUpload] = useState(false);

  const handleClose = () => setUpload(false);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <header className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Question Papers</h1>
            <p className="text-gray-600">Browse through previous year question papers</p>
          </header>

          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row justify-between gap-6">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700 mb-3">Filters</h2>
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium text-sm border border-gray-200">
                    Subject ▼
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium text-sm border border-gray-200">
                    Year ▼
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium text-sm border border-gray-200">
                    Branch ▼
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium text-sm border border-gray-200">
                    University ▼
                  </button>
                </div>
              </div>
              <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm"
              onClick={() => setUpload(prev => !prev)}>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                Upload Question Paper
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="absolute top-4 right-4 px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                  PDF
                </span>
              </div>
              
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-800 mb-4">Database Management Systems</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Year</p>
                    <p className="text-sm font-medium text-gray-900">2015</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Branch</p>
                    <p className="text-sm font-medium text-gray-900">IT</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">University</p>
                    <p className="text-sm font-medium text-gray-900">OU</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Pages</p>
                    <p className="text-sm font-medium text-gray-900">12</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Download
                  </button>
                  <button className="px-4 py-2 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors">
                    Preview
                  </button>
                </div>
              </div>
            </div>
            {/* More cards can be added here */}
          </div>
        </div>
      </div>
      {upload && <Upload onClose={handleClose} type='questionpaper' />}
    </>
  )
}

export default ExploreQuestions