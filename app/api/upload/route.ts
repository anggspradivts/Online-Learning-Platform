import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import formidable from 'formidable';
import { promisify } from 'util';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = promisify(formidable({ multiples: true }).parse);

export async function POST(req: NextRequest) {
  // //V1
  // try {
  //   console.log(req)
  //   const form = new formidable.IncomingForm();
  //   const { fields, files } = await parseForm(req);

  //   if (!files.file) {
  //     return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
  //   }

  //   const supabase = createClient();

  //   const file = files.file[0]; // formidable stores files as arrays if multiples are allowed
  //   const filePath = `upload/${file.originalFilename}`;
  //   const fileContent = fs.readFileSync(file.filepath);

  //   const { data, error } = await supabase.storage
  //     .from('bucket_name')
  //     .upload(filePath, fileContent, {
  //       contentType: file.mimetype,
  //     });

  //   if (error) {
  //     console.error('Error uploading file to Supabase:', error.message);
  //     return NextResponse.json({ message: 'Error uploading file' }, { status: 500 });
  //   }

  //   console.log('File uploaded successfully:', data);
  //   return NextResponse.json({ message: 'File uploaded successfully', data }, { status: 200 });
  // } catch (error) {
  //   console.error('Error parsing form or uploading file:', error.message);
  //   return NextResponse.json({ message: 'Error uploading file' }, { status: 500 });
  // }

  //V2
  try {
    console.log(req.body)
    const supabase = createClient();
  } catch (error) {
    console.log("err in the server upload file", error)
  }
}
