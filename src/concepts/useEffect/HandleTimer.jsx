import { useState } from "react";
import Timer from "./Timer";

export default function HandleTimer() {

    const [showTimer, setShowTimer] = useState(true);

    return (

        <div className="container mt-5">

            <div className="card shadow p-4 text-center">

                <h2 className="mb-4">
                    React Cleanup Function Demo
                </h2>

                <button
                    className="btn btn-primary mb-4"
                    onClick={() => setShowTimer(!showTimer)}
                >
                    {showTimer
                        ? "Hide Timer"
                        : "Show Timer"}
                </button>

                {
                    showTimer && <Timer />
                }

            </div>

        </div>
    );
}