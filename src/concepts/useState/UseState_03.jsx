
import { useState } from "react";

export default function InputChange() {

    const [name, setName] = useState("Mayur");

    function inputHandle(e) {
        setName(e.target.value);
        console.log(e.target.value);

    }


    return (
        <>
            <h1>{name}</h1>
            <input type="text" placeholder="enter name here..." name="useName" id="" onChange={inputHandle} />

        </>
    )
}