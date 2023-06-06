import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="w-full h-max">
        <div className="px-44 pt-24">
            <h2 className="text-6xl font-semibold">Our Works</h2>
            {children}
        </div>
    </div>
  )
}

export default Layout