import { useState, useEffect } from "react";

export default function UseEffectBasics() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count is changed.", count);
    }, [count]);

    function handleInc(e) {
        setCount((prevCount) => prevCount + 1);
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleInc}>Increment</button>

        </>
    )
}