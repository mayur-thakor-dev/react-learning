import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function User() {

    const { id } = useParams();

    const [user, setUser] = useState(null);

    useEffect(() => {

        async function fetchUser() {

            const res = await fetch(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );

            const data = await res.json();

            console.log(data);

            setUser(data);
        }

        fetchUser();

    }, [id]);

    if (!user) {
        return <h2>Loading...</h2>;
    }

    return (

        <>
            <div className="container py-5">

                <div className="row justify-content-center">

                    <div className="col-md-6">

                        <div className="card shadow">

                            <div className="card-body text-center">

                                <h2 className="mb-4">
                                    User Profile
                                </h2>

                                <h4>
                                    👤 {user.name}
                                </h4>

                                <p>
                                    📧 {user.email}
                                </p>

                                <p>
                                    📱 {user.phone}
                                </p>

                                <p>
                                    🏢 {user.company.name}
                                </p>

                                <p>
                                    🌍 {user.address.city}
                                </p>

                                <Link
                                    to="/"
                                    className="btn btn-secondary mt-3"
                                >
                                    Back To Users
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            );
        </>
    )
}