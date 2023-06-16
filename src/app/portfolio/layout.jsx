import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="w-full h-max flex flex-1 justify-center lg:justify-start">
        <div className="pt-20 pb-10 px-8 md:pt-28 md:px-10 lg:px-44 lg:pt-24">
            <h2 className="text-xl lg:text-6xl font-semibold text-center lg:text-left">Our Works</h2>
            {children}
        </div>
    </div>
  )
}

export default Layout