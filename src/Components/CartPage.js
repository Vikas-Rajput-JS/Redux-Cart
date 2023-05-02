import React, { useState,useEffect } from "react";
import Data from "./API";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT } from "../Redux/Actions/Action";
import { Dispatch } from "redux";
import PropagateLoader from "react-spinners/PropagateLoader";

export default function CartPage() {
  const dispatch = useDispatch();
  const getdata = useSelector((state) => state.CartRedcuer.Carts);

  let carts = getdata;


  const DLt = (id) => {
    dispatch(DLT(id));
  };

  let a;
  if (carts.length === 0) {
    a = "Is Empty";
  }

  const [loading,setloading]=useState(false);
  useEffect(()=>{
setloading(true);
setTimeout(()=>{
setloading(false);
},2000)
  },[])

  return (
    

     <div className="w-[100%] h-[600vh] flex justify-center bg-red-300 ">
      {loading ?(
         <div className="App bg-black flex  flex-col w-[100%] justify-center items-center  h-[100vh]">

<PropagateLoader color="#36d7b7"  />
         <h1 className='text-4xl text-neutral-200 mt-10'>Please Wait...</h1>
       </div>
      ): <div className="flex flex-col max-w-3xl  space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100  rounded-xl w-[60%] mt-24 mb-24">
        <h2 className="text-xl font-semibold">Your Cart {a}</h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {carts.map((items) => {
            return (
              <li
              className="flex flex-col py-6 sm:flex-row sm:justify-between"
              id={"OP" + items.id}
              >
              <div className="flex w-full space-x-2 sm:space-x-4">
              <img
              className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500 animation duration-400 hover:scale-105"
              src={items.thumbnail}
              alt="Polaroid camera"
              />
              <div className="flex flex-col justify-between w-full pb-4">
              <div className="flex justify-between w-full pb-2 space-x-2">
              <div className="space-y-1">
                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                          {items.title}
                        </h3>
                        <p className="text-sm dark:text-gray-400">Classic</p>
                        </div>
                        <div className="text-right">
                        <p className="text-lg font-semibold">${items.price}</p>
                        <p className="text-sm line-through dark:text-gray-600">
                        699
                        </p>
                        </div>
                        </div>
                        <div className="flex text-sm divide-x">
                        <button
                        onClick={() => DLt(items.id)}
                        type="button"
                        className="flex items-center px-2 py-1 pl-0 space-x-1"
                        >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current animation duration-100 hover:scale-125"
                        >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                        </svg>
                        <span onClick={() => DLt(items.id)}>Remove</span>
                        </button>
                        <button
                        type="button"
                        className="flex items-center px-2 py-1 space-x-1"
                        >
                        <svg
                          id="heart"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 fill-current hover:bg-red-700 rounded-full animation duration-100 hover:scale-125 "
                          >
                          <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                          </svg>
                          <span>Add to favorites</span>
                          </button>
                          </div>
                          </div>
                          </div>
                          </li>
                          );
                        })}
                        </ul>
                        
                        <div className="space-y-1 text-right" id="total">
                        <p>
                        Total amount:
                        <span className="font-semibold">
              {" "}
              $
              {carts
                .map((items) => items.price)
                .reduce((total, value) => total + value, 0)}
            </span>
          </p>
          <p className="text-sm dark:text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border rounded-md hover:bg-gradient-to-r from-emerald-500 to-lime-600 "
            >
            <Link to={"/"}>Back To Shop</Link>{" "}
            <span className="sr-only sm:not-sr-only"></span>
          </button>
          <button
            type="button"
            className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
            >
            <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
          </button>
        </div>
      </div>
      }
      </div>
   )
    }
      
    
    