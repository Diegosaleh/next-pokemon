'use client'

import { useState } from "react";

interface Props {
    value?: number;
}



export const CartCounter = ( { value = 0 }: Props ) => {

    const [counter, setCounter] = useState(value);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
        <span className="text-9xl"> {counter} </span>

        <div className="flex">
            <button 
                onClick={() => setCounter( counter + 1)} 
                className={`flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 ${ counter >= 0 ? 'bg-blue-400 ' : '' }`}
                >
                +1
            </button>

            <button 
                onClick={() => setCounter( counter - 1 )} 
                className={`flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 ${ counter < 0 ? 'bg-red-500 ' : '' }`}
                >
                -1
            </button>

            {/* <button 
                onClick={() => setCounter( 0 )} 
                className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
            >
                Reset
            </button> */}
        </div>
    </div>
  )
}
