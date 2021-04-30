import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(counter + 1);
    };

    const decrease = () => {
        setCounter(counter - 1);
    };

    return (

        <div className="d-flex flex-column text-center">
            <span className="bold" dir="ltr">{counter}</span>
            <div className="mt-2">
                <button onClick={increase} className="btn btn-sm btn-primary">+</button>
                <button onClick={decrease} className="btn btn-sm btn-danger ms-2">-</button>
            </div>
        </div>
    )
}

export default Counter;
