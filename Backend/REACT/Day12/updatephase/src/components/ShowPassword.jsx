import { useState } from "react";

function ShowPassword() {
  const [password] = useState("react123");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md">

        <h1 className="mb-4 text-center text-2xl font-bold text-black">
          Show Password
        </h1>

        <div className="mb-4 rounded-md border border-gray-300 bg-gray-50 p-3">
          <p className="text-gray-800">
            {showPassword ? password : "••••••••"}
          </p>
        </div>

        <button
          onClick={togglePassword}
          className="w-full rounded-md bg-black px-4 py-2 text-white"
        >
          {showPassword ? "Hide Password" : "Show Password"}
        </button>

      </div>
    </div>
  );
}

export default ShowPassword;

