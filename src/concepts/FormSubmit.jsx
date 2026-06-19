import { useState } from "react";

export default function FormSubmit() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    function handleChange(e) {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(e) {

        e.preventDefault();

        if (!formData.name) {
            alert("Please enter valid name");
            return;
        }

        if (!formData.email.includes("@")) {
            alert("Invalid Email");
            return;
        }

        console.log(formData);

        alert(`
Name: ${formData.name}
Email: ${formData.email}
        `);

        setFormData({
            name: "",
            email: ""
        });
    }

    return (
        <div className="container mt-5">

            <div className="card shadow p-4">

                <h2 className="text-center mb-4">
                    User Registration Form
                </h2>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>

                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                    >
                        Submit
                    </button>

                </form>

            </div>

        </div>
    );
}