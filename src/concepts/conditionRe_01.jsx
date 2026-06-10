// Login / Logout Message

import { useState } from "react";

export default function IsloggedIn({ name }) {

    const [isLogin, setIsLoggedIn] = useState(false);

    function isLogged() {
        setIsLoggedIn(!isLogin);
    }
    return (
        <>

            {isLogin ? `welcom ${name}` : alert("Please login")}
            {(!isLogin) && <h1>Please Click below button for login</h1>}
            <button onClick={isLogged}>Toggle</button>

        </>
    )
}