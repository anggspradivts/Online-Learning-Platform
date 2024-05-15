import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-gray-400 p-3">
      <div className="nav-container grid grid-cols-2">
        <div className="logo text-2xl font-bold">
          <h1>ELearn</h1>
        </div>
        <div className="flex justify-end">
          <input type="search" name="" id="" />
        </div>
      </div>
      <div className="flex gap-5">
        <button>Login</button>
        <button>SignUp</button>
      </div>
    </div>
  )
}

export default Navbar