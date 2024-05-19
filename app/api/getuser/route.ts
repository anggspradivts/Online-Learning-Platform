'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const supabase = createClient()
  const { data: { user }, error } = await supabase.auth.getUser();
  
  if (error) {
    return NextResponse.json({ error: 'Error fetching user' }, { status: 500 });
  }
  return NextResponse.json({ user }, { status: 200 });
}