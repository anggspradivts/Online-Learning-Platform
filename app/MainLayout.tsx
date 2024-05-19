"use client"
import React from 'react'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { createClient } from "@/utils/supabase/client"
import { useEffect, useState } from "react";

const MainLayout = ({ children }) => {
  // const [user, setUser] = useState(null)
  // const supabase = createClient();

  // useEffect(() => {
  //   const getUser = async () => {
  //     const { data: user, error } = await supabase.auth.getUser();
  //     if (error) console.log(error.message)
  //     // setUser(user)
  //     console.log("user", user.user)
  //   }
  //   getUser()
  // }, [])

  return (
    <div className="">
      <Navbar />
        {children}
      <Footer />
    </div>
  )
}

export default MainLayout