import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    return (

        <div className="container text-center py-5">

            <h1 className="display-4 fw-bold">
                React Router Project
            </h1>

            <p className="lead text-muted">

                Learn Routing, Dynamic Routes,
                API Fetching and Navigation

            </p>

            <button
                className="btn btn-primary btn-lg mt-3"
                onClick={() => navigate("/users")}
            >
                View Users
            </button>

        </div>

    );
}