

import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Carts from './components/Carts/Carts';
import Nevber from './components/Navber/Nevber';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [wantCookLists, setWantCookList] = useState([]);
  const [currentCookLists, setCurrentCookList] = useState([])

  const handleAddWantCookList = (cart, id) => {
    // console.log(id)
    // console.log(cart)
    const isExist = wantCookLists.find(list => list.recipe_id === id)
    if(!isExist){
      setWantCookList([...wantCookLists, cart])
    }
    else{
      toast("Already exist")
    }
    
    // console.log(newLists)
  }

  const handleAddToCurrentCookingList = (id) => {
    // console.log(id)
    const newWantList = wantCookLists.filter(item => item.recipe_id !== id)
    // console.log(newWantList)
    setWantCookList(newWantList);
    // const currentList = wantCookLists.map(item => item.recipe_id === id)
    // setCurrentCookList(currentList)
    console.log('current')
    
  }

  return (
    <>
      <div className='mx-[80px] mt-14'>
        <Nevber></Nevber>
        <Banner></Banner>
        <Carts 
        handleAddWantCookList={handleAddWantCookList} 
        wantCookLists={wantCookLists}
        handleAddToCurrentCookingList={handleAddToCurrentCookingList}
        currentCookLists={currentCookLists}
        ></Carts>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
