"use client"

import React from 'react'
import { signIn } from "next-auth/react"

const Login = () => {
  return (
    <div className='pt-24 px-44 h-screen'>
      <button className="py-2 px-4"
      onClick={() => signIn("goolge")}>Login with google</button>
    </div>
  )
}

export default Login