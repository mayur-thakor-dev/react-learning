import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {

    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <div className="card p-4 mt-4">

                <h2>Profile Component</h2>

                <hr />

                <h4>👤 {user.name}</h4>

                <p>💼 {user.role}</p>

                <button
                    className="btn btn-primary mt-3"
                    onClick={() =>
                        setUser({
                            name: "Rahul",
                            role: "Backend Developer"
                        })
                    }
                >
                    Change User
                </button>
            </div>

        </>
    )
}