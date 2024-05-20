"use client"
import React from 'react'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { createClient } from "@/utils/supabase/client"
import { useEffect, useState } from "react";

interface MainLayoutProps {
  user: boolean;
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, user }) => {

  return (
    <div className="">
      <Navbar />
        {children}
      <Footer />
    </div>
  )
}

export default MainLayout