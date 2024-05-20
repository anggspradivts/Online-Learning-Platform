"use client";
import React, { useState, useEffect } from "react";
import { createCourse } from "./action";
import { getUser } from "@/app/utils/utils"

const Page = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createCourse(user, name);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const userEmail = await getUser();
      setUser(userEmail)
    }
    fetchUser()
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <button type="submit">Create Course</button>
    </form>
  );
};

export default Page;
