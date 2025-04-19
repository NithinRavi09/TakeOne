
import Navbar from '../components/Navbar';

function Home() {


  return (
    <div  className="min-h-screen flex flex-col">
      <Navbar/>
      <h1 className="text-4xl font-bold text-blue-600"></h1>
      {/* Hero Section */}
      <main className="flex-grow bg-white">
        <div className="container mx-auto text-center py-20 px-6">
          <h1 className="text-5xl font-bold mb-4">Welcome to home</h1>
          <p className="text-lg mb-8">Connect with colleagues, discover opportunities, and grow your career.</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4">
        <p className="text-gray-600 text-sm">© 2025 ScriptIn. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home
