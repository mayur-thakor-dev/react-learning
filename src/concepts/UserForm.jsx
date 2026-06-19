import { useState } from "react";

export default function UserForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");



    return (
        <>
            <h1>User Form</h1>

            <input
                className="form-control mb-3"
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
            />

            <br />
            <br />


            <input
                className="form-control mb-3"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br />
            <br />
            <h2>Hello, {name}</h2>
            <h2>Email: {email}</h2>

            {
                email.length > 0 &&
                <h3>
                    {
                        email.includes("@")
                            ? "✅ Valid Email"
                            : "❌ Invalid Email"
                    }
                </h3>
            }

        </>
    )
}