
import { useState } from "react";

export default function NameChanager() {

    const [name, setName] = useState("Mayur");

    function changeName() {
        setName("Rohit");

    }


    return (
        <>
            <h1>{name}</h1>
            <button onClick={changeName}>Change Name</button>

        </>
    )
}