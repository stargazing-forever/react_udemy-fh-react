import { useState } from 'react';

export const useCounter = ( initialState = 10 ) => {

    const [counter, setCounter] = useState(initialState);

    const increment = () => {
        setCounter( counter + 1 );
    }

    const decrement = () => {
        setCounter( counter - 1 );
    }

    const resetCounter = () => {
        setCounter(initialState);
    }

    return {
        counter,
        increment, 
        decrement, 
        resetCounter
    };

}

//con factor
// const increment = ( factor = 1) => {
//     setstate( state + factor );
// }
