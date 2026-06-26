import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Navbar() {

    const { user } = useContext(UserContext);

    return (

        <div className="bg-dark text-white p-3 rounded">

            <h3>
                Welcome, {user.name}
            </h3>

        </div>

    );

}