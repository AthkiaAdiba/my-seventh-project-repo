

import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Carts from './components/Carts/Carts';
import Nevber from './components/Navber/Nevber';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [wantCookLists, setWantCookList] = useState([]);
  const [currentCookLists, setCurrentCookList] = useState([]);
  const [totalTime, setTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0)

  const handleAddWantCookList = (cart, id) => {
    
    const isExist = wantCookLists.find(list => list.recipe_id === id)
    if(!isExist){
      setWantCookList([...wantCookLists, cart])
    }
    else{
      toast("Already exist")
    }
  }

  const handleAddToCurrentCookingList = (id, time, calories) => {
    
    const newWantList = wantCookLists.filter(item => item.recipe_id !== id)
    setWantCookList(newWantList);

    // set Current Cook List
    const newCurrentList = wantCookLists.find(item => item.recipe_id === id)
    setCurrentCookList([...currentCookLists, newCurrentList])

    // sum of preparing time
    setTime((prevTime) => prevTime + time)

    // sum total calories
    setTotalCalories((prevcalories) => prevcalories + calories)
    
  }
  // console.log('clicked',totalTime)
  // console.log(totalCalories)

  
  
  return (
    <>
      <div className='mx-4 lg:mx-[80px] mt-14'>
        <Nevber></Nevber>
        <Banner></Banner>
        <Carts 
        handleAddWantCookList={handleAddWantCookList} 
        wantCookLists={wantCookLists}
        handleAddToCurrentCookingList={handleAddToCurrentCookingList}
        currentCookLists={currentCookLists}
        totalTime={totalTime}
        totalCalories={totalCalories}
        ></Carts>
      </div>
      <ToastContainer />
    </>
  )
}

export default App

