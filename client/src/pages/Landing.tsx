import React from 'react';

function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#006994] text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold">ScriptIn</div>
          <nav>
            <a href="/login" className="px-4 hover:underline cursor-pointer">Sign in</a>
            <a href="/signup" className="ml-4 px-4 py-2 bg-white text-[#006994] rounded cursor-pointer">Sign up</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow bg-white">
        <div className="container mx-auto text-center py-20 px-6">
          <h1 className="text-5xl font-bold mb-4">Welcome to your professional community</h1>
          <p className="text-lg mb-8">Connect with colleagues, discover opportunities, and grow your career.</p>
          <a href="/signup" className="px-6 py-3 bg-[#006994] text-white rounded-lg">Get started</a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4">
        <p className="text-gray-600 text-sm">© 2025 ScriptIn. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Landing;
