import { useState, useEffect } from "react";

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

                setError("❌ Failed to fetch users");

            } finally {

                setLoading(false);

            }
        }

        fetchUsers();

    }, []);

    // Loading State
    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <h2>⏳ Loading Users...</h2>
            </div>
        );
    }

    // Error State
    if (error) {
        return (
            <div className="container mt-5 text-center">
                <div className="alert alert-danger">
                    {error}
                </div>
            </div>
        );
    }

    // Success State
    return (
        <div className="container py-5">

            <div className="text-center mb-5">

                <h1 className="fw-bold">
                    Users Dashboard
                </h1>

                <p className="text-muted">
                    React API Fetch Example
                </p>

                <span className="badge bg-primary fs-6">
                    Total Users: {users.length}
                </span>

            </div>

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
                                <p className="card-text text-muted">
                                    {phone}
                                </p>
                                <p className="card-text text-muted">
                                    {company.name}
                                </p>


                            <button className="btn btn-primary">
                                View Profile
                            </button>
                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}