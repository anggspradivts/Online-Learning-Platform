"use server";
import { createClient } from "@/utils/supabase/server";

interface CreateCourseProps {
  user: string | null;
  courseTitle: string;
}
export const createCourse = async ({
  user,
  courseTitle,
}: CreateCourseProps) => {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .from("course")
      .insert({
        user_name: user,
        title: courseTitle,
      })
      .select();

    if (error) {
      console.log("supabase insert error", error);
    }

    console.log("inserted data;", data);
  } catch (error) {
    console.log("err", error);
  }
};


interface UploadFileProps {
  selectedFile: File;
}
export const uploadFile = async ( { selectedFile } : UploadFileProps) => {
  const supabase = createClient();
  const filePath = `upload/${selectedFile.name}`
  try {
    const { data, error } = await supabase.storage
      .from("course_video")
      .upload(filePath, selectedFile);
    if (error) {
      console.log("Error from upload file server", error.message)
    } else {
      console.log(data)
    }
  } catch (error) {
    console.log("err", error);
  }
};

//Send request to server
interface HandleUpload {
  selectedFile: File | null
}
export const handleUploadFile = async (selectedFile: File | null) => {
  if (!selectedFile) return;

  // //v1
  // const formData = new FormData();
  // formData.append('file', selectedFile);
  // console.log("form data", formData)
  // console.log("sf", selectedFile)

  // try {
  //   const response = await fetch('/api/upload', {
  //     method: 'POST',
  //     body: formData,
  //   });

  //   if (!response.ok) {
  //     throw new Error('File upload failed');
  //   }

  //   const data = await response.json();
  //   console.log('File uploaded successfully', data);
  // } catch (error) {
  //   console.error('Error uploading file from trycatch:', error);
  // }

  const reader = new FileReader();
  reader.readAsDataURL(selectedFile);

  reader.onload = async () => {
    const fileDataUrl = reader.result as string;

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileDataUrl }), // Pass the data URL to the server
      });

      if (!response.ok) {
        throw new Error('File upload failed');
      }

      const data = await response.json();
      console.log('File uploaded successfully', data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  reader.onerror = (error) => {
    console.error('Error reading file:', error);
  };
};