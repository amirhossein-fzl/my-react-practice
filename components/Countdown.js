import React, { useState } from 'react';

const Countdown = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);
    return (
        <span className="text-light time">{ time }</span>
    )
};

export default Countdown;
