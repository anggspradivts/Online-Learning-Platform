'use client'
import React, { useState, useEffect } from 'react'
import CreateForm from "./CreateForm"
import { getUser } from "@/app/utils/utils"


const Page = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const fetchUser = async () => {
      const userEmail = await getUser();
      setUser(userEmail)
    }
    fetchUser()
  }, [])

  if (!user) {
    return <div>Try Login First</div>
  }

  return (
    <div>
      <h1>Create Course Page</h1>
      {/* <div>
        {user === null ? (
          <div>
            try login first
          </div>
        ) : (
          <div>
            <CreateForm />
          </div>
        )}
      </div> */}
      <CreateForm />
    </div>
  )
}

export default Page