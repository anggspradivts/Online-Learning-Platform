'use client'
import React, { useState, useEffect } from 'react'
import CreateForm from "./CreateForm"
import { getUser } from "@/app/utils/utils"


const Page = () => {
  const [user, setUser] = useState<string | null>(null)
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
      <CreateForm />
    </div>
  )
}

export default Page