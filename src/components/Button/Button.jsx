import Link from 'next/link'
import React from 'react'

const Button = ({ text, url }) => {
  return (
   <Link href={url}>
     <button className="px-2 w-32 py-3 bg-green-400 rounded-xl text-sm text-white">{text}</button>
   </Link>
  )
}

export default Button