

import './App.css'
import Banner from './components/Banner/Banner'
import Carts from './components/Carts/Carts'
import Nevber from './components/Navber/Nevber'



function App() {
  return (
    <>
      <div className='mx-[80px] mt-14'>
        <Nevber></Nevber>
        <Banner></Banner>
        <Carts></Carts>
      </div>
    </>
  )
}

export default App
