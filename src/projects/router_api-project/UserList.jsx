import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Home from "../../concepts/router/pages/Home";

export default function UserList() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        async function fetchUsers() {

            try {
                const res = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                const data = await res.json();
                console.log(data);
                setUsers(data);
            } catch (err) {

                console.error(err);

                setError("Failed to fetch users");
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();

    }, []);
    return (
        <>
            <Home />
            <h1>Users List</h1>

            <h2>Total Users: {users.length}</h2>

            <div className="row">

                {users.map(({ id, name, email, phone, company }) => (

                    <div
                        key={id}
                        className="col-lg-4 col-md-6 mb-4"
                    >

                        <div className="card shadow-sm border-0 h-100">

                            <div className="card-body">

                                <h5 className="card-title">
                                    👤 {name}
                                </h5>

                                <p className="card-text text-muted">
                                    📧 {email}
                                </p>


                                <Link
                                    to={`/user/${id}`}
                                    className="btn btn-primary"
                                >
                                    View Profile
                                </Link>
                            </div>

                        </div>

                    </div>

                ))}

            </div>
        </>
    );
}