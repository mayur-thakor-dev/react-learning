import { useState } from "react";

export default function RegistrationForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        password: "",
        confirmPassword: ""
    });

    function handleChange(e) {

        const { name, value } = e.target;
        // console.log(e);
        // console.log(e.target);
        // console.log(name, value);
        // console.log(...formData);


        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <div className="container mt-5">

            <div className="card shadow p-4">

                <h2 className="text-center mb-4">
                    Registration Form
                </h2>

                <div className="row">

                    {/* Name */}
                    <div className="col-md-6 mb-3">
                        <label className="form-label">
                            Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter Name"
                        />
                    </div>

                    {/* Email */}
                    <div className="col-md-6 mb-3">
                        <label className="form-label">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter Email"
                        />
                    </div>

                    {/* Phone */}
                    <div className="col-md-6 mb-3">
                        <label className="form-label">
                            Phone
                        </label>

                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter Phone"
                        />
                    </div>

                    {/* City */}
                    <div className="col-md-6 mb-3">
                        <label className="form-label">
                            City
                        </label>

                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter City"
                        />
                    </div>

                    {/* State */}
                    <div className="col-md-6 mb-3">
                        <label className="form-label">
                            State
                        </label>

                        <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter State"
                        />
                    </div>

                    {/* Address */}
                    <div className="col-md-6 mb-3">
                        <label className="form-label">
                            Address
                        </label>

                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter Address"
                        />
                    </div>

                    {/* Password */}
                    <div className="col-md-6 mb-3">
                        <label className="form-label">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter Password"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="col-md-6 mb-3">
                        <label className="form-label">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Confirm Password"
                        />
                    </div>

                </div>

                <button
                    className="btn btn-primary w-100 mt-3"
                >
                    Register
                </button>

            </div>

            {/* Live Preview */}

            <div className="card mt-4 p-3 shadow">

                <h3>User Preview</h3>

                <p>
                    <strong>Name:</strong> {formData.name}
                </p>

                <p>
                    <strong>Email:</strong> {formData.email}
                </p>

                <p>
                    <strong>Phone:</strong> {formData.phone}
                </p>

                <p>
                    <strong>Address:</strong> {formData.address}
                </p>

                <p>
                    <strong>City:</strong> {formData.city}
                </p>

                <p>
                    <strong>State:</strong> {formData.state}
                </p>

            </div>

        </div>
    );
}