"use client";

import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();

  const router = useRouter();

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center pt-24 px-44">
      <button
        className="px-2 w-60 mb-2 py-3 bg-white rounded-xl text-sm text-[#111]"
        onClick={() => signIn("goolge")}
      >
        Login with google
      </button>
      <form onSubmit={handleSubmit} className="space-y-4 w-60 h-max">
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
          Login
        </button>
      </form>
      <Link href="/dashboard/register" className="text-center text-sm mt-2">
        No have account?
      </Link>
    </div>
  );
};

export default Login;
