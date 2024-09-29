'use client'

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";


interface Props {
    value?: number;
}

export interface CounterResponse {
    method: string;
    count: number;
}


const getApiCounter = async():Promise<CounterResponse> => {

    const data = await fetch( '/api/counter' ).then( res => res.json() );
    // const data = await response.json();
    console.log({data});
    

    return data as CounterResponse;

}



export const CartCounter = ( { value = 0 }: Props ) => {
    console.log(value)
    const count = useAppSelector( state => state.counter.count );

    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     dispatch( initCounterState( value ) )
    // }, [dispatch, value]);


    useEffect(() => {
        getApiCounter()
        .then( ({ count }) => dispatch( initCounterState( count ) ) );
    }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
        <span className="text-9xl"> { count } </span>

        <div className="flex">
            <button 
                onClick={() => dispatch( addOne() )} 
                className={`flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 ${ count >= 0 ? 'bg-blue-400 ' : '' }`}
                >
                +1
            </button>

            <button 
                onClick={() => dispatch( substractOne() )} 
                className={`flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 ${ count < 0 ? 'bg-red-500 ' : '' }`}
                >
                -1
            </button>

            {/* <button 
                onClick={() => dispatch( resetCount( value ) )} 
                className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
            >
                Reset
            </button> */}
        </div>
    </div>
  )
}
