import { useState, useEffect } from "react";

export default function Timer() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log("Timer Started");

        const timer = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        return () => {
            console.log("Cleanup Function Executed");
            clearInterval(timer);
        };

    }, []);

    return (
        <div className="mt-3">
            <h1 className="display-4">
                ⏱ Timer: {count}
            </h1>
        </div>
    );
}