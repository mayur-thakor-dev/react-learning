import { useState, useEffect } from "react";

export default function SearchUser() {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
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

    }, [search]);

    // Search Filtering
    const filteredUsers = users.filter((user) =>
        user.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );

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


    return (
        <>
            <div className="container py-5">
                <div className="text-center mb-5">


                    <h1 className="fw-bold">
                        Users Dashboard
                    </h1>
                    <p className="text-muted">
                        Search Users from API Data
                    </p>
                </div>

                {/* Search Input */}

                <div className="row justify-content-center mb-4">

                    <div className="col-md-6">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search User..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                        />

                    </div>

                </div>

                {/* Users List */}

                <div className="row">

                    {filteredUsers.map(
                        ({ id, name, email, phone, company }) => (

                            <div
                                key={id}
                                className="col-lg-4 col-md-6 mb-4"
                            >

                                <div className="card shadow-sm h-100">

                                    <div className="card-body">

                                        <h5 className="card-title">
                                            {name}
                                        </h5>

                                        <p className="text-muted">
                                            📧 {email}
                                        </p>

                                        <p className="text-muted">
                                            📱 {phone}
                                        </p>

                                        <p className="text-muted">
                                            🏢 {company.name}
                                        </p>

                                        <button className="btn btn-primary">
                                            View Profile
                                        </button>

                                    </div>

                                </div>

                            </div>

                        )
                    )}

                </div>

            </div>
        </>
    )
}