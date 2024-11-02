import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {

  return (
    <>
      <Navbar />
      <div className='grid grid-cols-3'>
        <Card coin_name={'bitcoin'} />
        <Card coin_name={'ethereum'} />
        <Card coin_name={'dogecoin'} />
      </div>
      <p className="text-red-500 font-bold">
          App.jsx
      </p>
    </>
  )
}

export default App
