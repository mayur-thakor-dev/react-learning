import { useState } from "react";

export default function DarkMode() {

    const [darkMode, setDarkMode] = useState(false);

    function toggleMode() {
        setDarkMode(!darkMode);

    }

    return (
        <>
            <h1>
                Current Mode:
                {darkMode ? " Dark 🌙" : " Light ☀️"}
            </h1>

            <button onClick={toggleMode}>
                Change Mode
            </button>
        </>
    );
}