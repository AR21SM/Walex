import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/Subheading";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-96 space-y-5">
        <Heading label={"Sign In"} />
        <SubHeading label={"Enter your credentials to access your account"} />

        <div className="space-y-4">
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
              const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                username,
                password,
              });
              localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
            } catch (error) {
              console.error("Sign-in failed:", error);
            }
          }}
          label={"Sign In"}
          className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200"
        />

        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  );
}