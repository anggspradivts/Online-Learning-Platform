import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-gray-400 p-3 text-white">
      <div className="grid grid-cols-2">
        <div className="footer-logo">
          <h1 className="font-bold text-2xl">Online Learning</h1>
        </div>
        <div className="right-side flex justify-end">
          dunno
        </div>
      </div>
      <div className="footer-list">
        <ul>
          <li>List</li>
          <li>List</li>
          <li>List</li>
          <li>List</li>
          <li>List</li>
        </ul>
      </div>
      <div className="footer-end flex justify-end">
        <p>&copy; 2024 Angga Pradivta Personal Webpage. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Navbar