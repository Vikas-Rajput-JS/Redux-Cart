import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ProductCard from './Components/ProductCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './Components/CartPage';
import { useState,useEffect } from 'react';
import RingLoader from "react-spinners/RingLoader";

 
function App() {

  const [loading,setloading]=useState(false);
  useEffect(()=>{
setloading(true);
setTimeout(()=>{
setloading(false);
},7000)
  },[])
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <BrowserRouter>
    
      {loading ? (
        <div className="App bg-black flex  flex-col w-[100%] justify-center items-center  h-[100vh]">

          <RingLoader color="#36d7b7"
          size={'15vh'} className='' />
          <h1 className='text-4xl text-neutral-200 mt-10'>Please Wait...</h1>
        </div>
      )
      :
    <div className="App bg-black flex  flex-col w-[100%]  h-[100vh]">

        <Navbar/>

 <Routes>
<Route path='/' element={<ProductCard/>}/>
<Route path='/Cart' element={<CartPage/>}/>

 </Routes>
    </div>
}
    </BrowserRouter>
  );
}

export default App;
