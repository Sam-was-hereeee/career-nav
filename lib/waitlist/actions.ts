"use server"
import { createClient } from "@lib/supabase/server";
import {TablesInsert} from "@/database.types";

type WaitlistInfo = TablesInsert<"waitlist">

export async function joinWaitlist(email: string, name: string="", shoutout: string = "") {
    const supabase = await createClient();
    const info: WaitlistInfo = {email, name, shoutout};
    const {data, error} = await supabase.from("waitlist").insert(info);
    if (error || !data) {
        return {data: null, error: error}
    }
    return {data, error:null}
}