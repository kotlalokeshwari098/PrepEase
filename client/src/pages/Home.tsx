import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      title: "Upload & Extract",
      description:
        "Upload notes, PDFs, or question papers. Our PyPDFLoader pipeline extracts clean, accurate text automatically.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
      ),
    },
    {
      title: "AI Question Detection",
      description:
        "BERT-powered models detect and classify questions by type and topic, eliminating manual sorting.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "AI-Powered Answers",
      description:
        "RAG-based answer generation gives high-quality responses grounded in your uploaded materials.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: "Organized Study Library",
      description:
        "Store previous year papers, topic-wise questions, and answers. Easily searchable and accessible.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold text-gray-900">PrepEase</span>
            </Link>

            <div className="flex items-center gap-4">
              <Link to="/login">
                <button className="px-6 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Sign In
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 py-10 md:py-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-gray-900">
                Turn Chaos into Clarity {" "} 
                <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
                  with AI-Organized Notes.
                </span>
              </h1>

              <p className="text-lg text-gray-600">
                Upload. Extract. Study.  
                PrepEase turns raw study material into clean, structured questions — instantly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 w-full sm:w-auto font-medium">
                    Start Using PrepEase
                  </button>
                </Link>
                <Link to="/questions">
                  <button className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-300 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto font-medium">
                    View Question Bank
                  </button>
                </Link>
              </div>
            </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 blur-3xl rounded-full"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl shadow-blue-200/50 p-8 border border-blue-100">
                  <div className="space-y-4">
                    <div className="h-4 bg-blue-100 rounded w-3/4"></div>
                    <div className="h-4 bg-sky-100 rounded w-1/2"></div>
                    <div className="h-32 bg-gradient-to-br from-blue-100 via-sky-100 to-indigo-100 rounded-lg"></div>
                    <div className="h-4 bg-blue-100 rounded w-2/3"></div>
                    <div className="h-4 bg-sky-100 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Tools Designed for Effortless Exam Prep
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From question extraction to answer generation — everything is automated and organized for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-1 border border-blue-100"
              >
                <div className="rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 w-12 h-12 flex items-center justify-center mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Study Smarter. Save Time. Use PrepEase.
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students organizing their entire exam preparation using AI.
          </p>
          <Link to="/dashboard">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:shadow-xl hover:shadow-blue-800/30 transition-all duration-300 font-medium">
              Get Started Free
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-blue-200 bg-blue-50">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© 2025 PrepEase. AI-powered exam preparation platform.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
