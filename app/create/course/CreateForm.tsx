"use client";
import React, { useState, useEffect } from "react";
import { createCourse, handleUploadFile, uploadFile } from "./action";
import { getUser } from "@/app/utils/utils";

const Page = () => {
  const [courseTitle, setCourseTitle] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [user, setUser] = useState<string | null>(null);

  //Submit create course
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createCourse({ user, courseTitle });
  };

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLFormElement>
  ) => {
    const file: File = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  //Fetch user
  useEffect(() => {
    const fetchUser = async () => {
      const userEmail = await getUser();
      setUser(userEmail);
    };
    fetchUser();
  }, []);

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("File upload failed");
      }

      const data = await response.json();
      console.log("File uploaded successfully", data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  console.log(typeof handleUploadFile);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          File:
          <input type="file" id="file" onChange={handleFileSelect} />
          <div>
            <button className="p-2 m-1 bg-gray-400" onClick={handleUpload}>
              Upload File V1
            </button>
            <button
              className="p-2 m-1 bg-gray-400"
              onClick={async () => handleUploadFile(selectedFile)}
            >
              Upload File V2
            </button>
          </div>
        </label>
      </div>
      <div>
        <button className="p-2 m-1 bg-orange-400" type="submit">Create Course</button>
      </div>
    </form>
  );
};

export default Page;
