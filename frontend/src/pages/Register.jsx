import { useState } from "react";
import API from "../services/api";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await API.post("/auth/register", formData);

            alert("Registration Successful!");

            navigate("/");

        } catch (err) {

            alert(err.response?.data?.error || "Registration Failed");

        }
    };

    return (
        <div className="container">

            <form className="card" onSubmit={handleSubmit}>

                <h1>ATS Resume Analyzer</h1>

                <h2>Register</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    Register
                </button>

                <p>
                    Already have an account?
                    <Link to="/"> Login</Link>
                </p>

            </form>

        </div>
    );
};

export default Register;