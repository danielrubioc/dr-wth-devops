// Placeholder to host a component
import React, { useState, useEffect } from "react";

const Hours = () => {
    const [time, setTime] = useState({ hours: null, minutes: null });

    useEffect(() => {
        const currentTime = new Date();
        setTime({
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
        });
    }, []); // Se ejecuta una sola vez después de montar el componente

    if (time.hours === null || time.minutes === null) {
        return null; // Evita renderizar en el servidor
    }

    return (
        <div>
            <h2>Current Time</h2>
            <p>
                {time.hours}:{time.minutes < 10 ? `0${time.minutes}` : time.minutes}
            </p>
        </div>
    );
};

export default Hours;