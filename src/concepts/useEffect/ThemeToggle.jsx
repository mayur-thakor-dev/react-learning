import { useState, useEffect } from "react";

export default function ThemeToggle() {

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        console.log("theme changed");
    }, [theme]);

    function handleTheme(e) {
        setIsDark(!isDark);
    }
    return (
        <>
            <h1>Current Theme: {isDark ? "light" : "dark"
            }</h1>
            <button onClick={handleTheme}>Toggle Status</button>

        </>
    )
}