import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { state:counter, increment, decrement, resetCounter} = useCounter( 100 );

    return (
        <div>
            <h1>Counter with Hook: { counter }</h1>
            <hr />

            <button 
                className="btn btn-primary mr-3"
                onClick={ () => increment(5)}
            >
                    +1
            </button>

            <button 
                className="btn btn-success mr-3"
                onClick={ resetCounter }
            >
                Reset
            </button>

            <button 
                className="btn btn-primary"
                onClick={ () => decrement(5) }
            >
                -1
            </button>
        </div>
    )
}
