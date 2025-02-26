import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/Subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for errors
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!firstName || !lastName || !username || !password) {
      setError("All fields are required!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/v1/user/signup", {
        username,
        firstName,
        lastName,
        password,
      });

      console.log("Signup Response:", response.data); // Debugging log

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard"); // Navigate after successful signup
      } else {
        setError("Signup failed: No token received");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-96 space-y-5">
        <Heading label="Create Your Account" />
        <SubHeading label="Sign up to get started with our services" />

        <div className="space-y-4">
          <InputBox
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Ashish"
            label="First Name"
            required
          />
          <InputBox
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Mahajan"
            label="Last Name"
            required
          />
          <InputBox
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="you@example.com"
            label="Email"
            type="email"
            required
          />
          <InputBox
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="●●●●●●●●"
            type="password"
            label="Password"
            required
          />
        </div>

        {/* Show error message if exists */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button
          onClick={handleSignup}
          label="Sign Up"
          className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200"
        />

        <BottomWarning label="Already have an account?" buttonText="Sign in" to="/signin" />
      </div>
    </div>
  );
}
