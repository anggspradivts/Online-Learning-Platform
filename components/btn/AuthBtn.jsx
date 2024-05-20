import React from 'react'

const AuthBtn = (formAction, name) => {
  return (
    <div>
      <button className="bg-orange-400 mr-4" formAction={formAction}>
        {name}
      </button>
    </div>
  )
}

export default AuthBtn