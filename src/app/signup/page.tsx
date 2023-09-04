"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "", username: "" });

  const onSignUp = async () => {
    try {
      const response = await axios.post("/api/users/signup", user);
      console.log(response);
      router.push("/login");
      alert("SignUp success");
    } catch (err: any) {
      alert("SignUp failed");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-y-4 my-auto h-screen">
        <p className="font-semibold text-2xl">SignUp Page</p>
        <label htmlFor="username">user name</label>
        <input
          type="text"
          id="username"
          value={user.username}
          placeholder="username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="p-2 border border-gray-300 rounded-md mb-4
              focus:border-gray-600 text-black"
        />
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
          onClick={onSignUp}
          className="my-3 border border-gray-300 focus:border-gray-600 px-6 py-3 rounded-md text-sm focus:bg-white focus:text-black "
        >
          Sign Up
        </button>
        <div>
          <p>
            Have account? Go to
            <span className="cursor-pointer font-semibold pl-2" onClick={() => router.push("/login")}>
              login page
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
