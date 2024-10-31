import './App.css'
import Navbar from './components/Navbar'
import Chart from './components/Chart'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Chart />
        <p className="text-red-500 font-bold">
          App.jsx
        </p>
        
      </div>
    </>
  )
}

export default App
