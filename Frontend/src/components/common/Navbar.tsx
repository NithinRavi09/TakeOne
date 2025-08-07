import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/landing');
    }
  return (
    <>
      {/* Header */}
      <header className="bg-[#006994] text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold">ScriptIn</div>
          <nav>
            <a onClick={handleLogout} className="ml-4 px-4 py-2 bg-white text-[#006994] rounded cursor-pointer">Logout</a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
