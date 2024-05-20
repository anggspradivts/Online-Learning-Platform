'use server'
import { createClient } from "@/utils/supabase/server"

export const createCourse = async (user, title) => {
  const supabase = createClient()

  try {
    const { data, error } = await supabase
      .from('course')
      .insert({
        user_name: user,
        title: title
      })
      .select()

    if (error) {
      console.log("supabase insert error", error)
    }

    console.log("inserted data;", data)
  } catch (error) {
    console.log("err", error)
  }
}