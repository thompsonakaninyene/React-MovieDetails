import { useState, useEffect } from "react";
import Logo from "../shared/logo";
import "./Register.css";
import Login from "./login";

function Register() {
  const [login, setLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Monitor the updated formData
  useEffect(() => {
    // console.log("Form Data:", formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
   

    // Check passwords
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://zyloo-api-v1.onrender.com/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      const getRegistered = await response.json();

      console.log("Registration response:", getRegistered);

      if (!response.ok) {
        console.log("Registration failed");
        return;
      }

      console.log("Registration successful");
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">

        <div className="register-brand">
          <div className="logo">
            <Logo />
          </div>

          <div>
            <span className="register-brand-name">CineScope</span>
          </div>
        </div>

        <div className="register-header">
          <h1 className="register-title">
            Create an account
          </h1>

          <p className="register-subtitle">
            Join CineScope and start your cinematic journey.
          </p>
        </div>

        <form
          className="register-form"
          onSubmit={handleSubmit}
        >

          {/* First Name */}
          <div className="register-field">
            <label htmlFor="firstName">
              First Name
            </label>

            <input
              className="register-input"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
          </div>

          {/* Last Name */}
          <div className="register-field">
            <label htmlFor="lastName">
              Last Name
            </label>

            <input
              className="register-input"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
          </div>

          {/* Email */}
          <div className="register-field">
            <label htmlFor="email">
              Email
            </label>

            <input
              className="register-input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="register-field">
            <label htmlFor="password">
              Password
            </label>

            <input
              className="register-input"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
            />
          </div>

          {/* Confirm Password */}
          <div className="register-field">
            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <input
              className="register-input"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
          </div>

          {login && (
            <button
              type="submit"
              className="register-submit"
              disabled={isLoading}
            >
              {isLoading
                ? "Loading..."
                : "Create account"}
            </button>
          )}

        </form>

        <div className="register-footer">
          <span>
            Already have an account?
          </span>
          
          <a
            href="#login"
            className="register-login-link"
          >
            Sign In
          </a>
          
        </div>

      </div>
    </div>
  );
}

export default Register;