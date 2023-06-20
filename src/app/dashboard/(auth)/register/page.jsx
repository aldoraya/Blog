"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Register = () => {
  const [err, setErr] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center pt-24 px-44">
      <form onSubmit={handleSubmit} className="space-y-4 w-60 h-max">
        <input
          type="text"
          placeholder="username"
          className="w-full p-2 border border-[#bbb] text-white bg-transparent rounded-md"
          required
        />
        <input
          type="email"
          placeholder="email"
          className="w-full p-2 border border-[#bbb] text-white bg-transparent rounded-md"
          required
        />
        <input
          type="password"
          placeholder="password"
          className="w-full p-2 border border-[#bbb] text-white bg-transparent rounded-md"
          required
        />
        <button className="px-2 w-full py-3 bg-green-400 rounded-xl text-sm text-white">
          Register
        </button>
      </form>
      {err && "Something wrong!"}
      <Link href="/dashboard/login" className="text-center text-sm mt-2">
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
