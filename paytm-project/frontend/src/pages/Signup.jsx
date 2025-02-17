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
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-96 space-y-5">
        <Heading label={"Create Your Account"} />
        <SubHeading label={"Sign up to get started with our services"} />

        <div className="space-y-4">
          <InputBox
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={"Ashish"}
            label={"First Name"}
          />
          <InputBox
            onChange={(e) => setLastName(e.target.value)}
            placeholder={"Mahajan"}
            label={"Last Name"}
          />
          <InputBox
            onChange={(e) => setUsername(e.target.value)}
            placeholder={"you@example.com"}
            label={"Email"}
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            placeholder={"●●●●●●●●"}
            type="password"
            label={"Password"}
          />
        </div>

        <Button
          onClick={async () => {
            try {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signup",
                { username, firstName, lastName, password }
              );
              localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
            } catch (error) {
              console.error("Signup failed:", error);
            }
          }}
          label={"Sign Up"}
          className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200"
        />

        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  );
}
