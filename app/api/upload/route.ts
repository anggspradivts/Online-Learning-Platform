import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import formidable from 'formidable';
import { promisify } from 'util';
import fs from 'fs/promises';

export const config = {
  api: {
    bodyParser: false,
  },
};

// Function to parse the incoming form data
const parseForm = async (req: NextRequest): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const form = formidable({ multiples: false });

  return new Promise((resolve, reject) => {
    form.parse(req as any, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

export const POST = async (req: NextRequest) => {
  try {
    const { files } = await parseForm(req);

    const uploadedFile = files.file as formidable.File; // Cast the file to formidable's File type

    if (!uploadedFile) {
      return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
    }

    const supabase = createClient();

    const filePath = `upload/${uploadedFile}`;
    const fileContent = await fs.readFile(uploadedFile.filepath);

    const { data, error } = await supabase.storage
      .from('bucket_name')
      .upload(filePath, fileContent, {
        contentType: uploadedFile.mimetype || undefined,
      });

    if (error) {
      console.error('Error uploading file to Supabase:', error.message);
      return NextResponse.json({ message: 'Error uploading file' }, { status: 500 });
    }

    console.log('File uploaded successfully:', data);
    return NextResponse.json({ message: 'File uploaded successfully', data });
  } catch (error: any) {
    console.error('Error parsing form or uploading file:', error.message);
    return NextResponse.json({ message: `Error uploading file: ${error.message}` }, { status: 500 });
  }
};
