import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice';
import './Counter.css'


export function Counter() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div className='BtnContainer'>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    follow

                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    unfollow


                </button>
                <span>{count} Follows</span>

            </div>
        </div>
    )
}