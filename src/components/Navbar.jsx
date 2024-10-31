import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            Meu Dashboard
          </div>
          <div className="space-x-12">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
              Dashboard
            </a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
              Equipe
            </a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
              Projetos
            </a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
              Relatórios
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar