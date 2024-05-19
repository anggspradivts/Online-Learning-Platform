'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

// import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse, NextRequest } from 'next/server';


export async function POST (req: NextRequest) {
  const supabase = createClient();
  try {
    const { error } = await supabase.auth.signOut({ scope: 'local' });
    if (error) {
      console.error('Theres an error when logout', error);
      return NextResponse.json({ error: 'Failed to sign out' });
    } else {
      console.log('Successfully signed out');
      return NextResponse.json({ data: 'Success signout' });
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return NextResponse.json({ error: 'Failed to sign out' });
  }
}