import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
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

    console.log("Login button clicked");
    console.log(formData);

    try {

        console.log("Sending request...");

        const res = await API.post("/auth/login", formData);

        console.log("Response:", res.data);

        localStorage.setItem("token", res.data.token);

        navigate("/dashboard");

    } catch (err) {

        console.log(err);

        alert(err.response?.data?.message || err.message);

    }
};
    return (

        <div className="container">

            <form onSubmit={handleSubmit} className="card">

                <h1>ATS Resume Analyzer</h1>

                <h2>Login</h2>

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
                    Login
                </button>

                <p>
                    Don't have an account?
                    <Link to="/register"> Register</Link>
                </p>

            </form>

        </div>

    );

};

export default Login;