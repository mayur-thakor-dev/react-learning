import { useState } from "react";

export default function CharacterCounter() {

    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <>
            <input
                type="text"
                placeholder="Type here..."
                onChange={handleChange}
            />

            <h2>
                Text : {text} <br />
                Characters: {text.length}
            </h2>
        </>
    );
}