

import './App.css'
import Banner from './components/Banner/Banner'
import Nevber from './components/Navber/Nevber'


function App() {
  return (
    <>
      <div className='mx-[80px] mt-14'>
        <Nevber></Nevber>
        <Banner></Banner>
      </div>
      <div className="card w-96 bg-base-100 border-2 border-[#28282833] mb-10 ml-10">
        <figure className="px-5 pt-5">
          <img src="https://res.cloudinary.com/dv6fgvj2c/image/upload/v1710524684/v3hli22jmyeafsmaa3la.jpg" alt="Shoes" className="rounded-xl w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-semibold text-[#282828]">Fattoush Salad</h2>
          <p className="text-base text-[#878787]">2,000 calories a day is used for general nutrition advice, but calorie needs vary.</p>
          <div className="divider"></div>
          <h5 className="text-lg font-medium text-[#282828]">Ingredients: 6</h5>
          <ul>
            <li className='text-lg text-[#878787]'>Parmesan Cheese</li>
            <li className='text-lg text-[#878787]'>Lettuce</li>
            <li className='text-lg text-[#878787]'>Purslane</li>
          </ul>
          <div className='divider'></div>
          <div className='flex justify-between items-center'>
            <p className='text-[#282828cc]'>30 minutes</p>
            <p className='text-[#282828cc]'>600 calories</p>
          </div>

          <div className='mt-4'>
            <button className="btn bg-[#0BE58A] rounded-[50px] border-none mr-5">Want to Cook</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
