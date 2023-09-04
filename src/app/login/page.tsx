"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "" });

  const onLogin = async () => {
    try {
      await axios.post("/api/users/login", user);
      router.push("/profile");
      alert("Login success");
    } catch {
      alert("Login Problem");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-y-4 my-auto h-screen">
        <p className="font-semibold text-2xl">Login Page</p>
        <label htmlFor="email">user email</label>
        <input
          type="text"
          id="email"
          value={user.email}
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="p-2 border border-gray-300 rounded-md mb-4
              focus:border-gray-600 text-black"
        />
        <label htmlFor="password">user password</label>
        <input
          type="password"
          id="password"
          value={user.password}
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="p-2 border border-gray-300 rounded-md mb-4
              focus:border-gray-600 text-black"
        />
        <button
          onClick={onLogin}
          className="my-3 border border-gray-300 focus:border-gray-600 px-6 py-3 rounded-md text-sm focus:bg-white focus:text-black "
        >
          Log In
        </button>
        <div>
          <p>
            Do not have account? Go to
            <span className="cursor-pointer font-semibold pl-2" onClick={() => router.push("/signup")}>
              sign up page
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
