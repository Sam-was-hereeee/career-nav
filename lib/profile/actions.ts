"use server"
import {createClient} from "@lib/supabase/server";
import {TablesInsert} from "@/database.types";
import {getUserInfo} from "@lib/auth/actions";
import {sendEmail} from "@lib/emali/utils";

type profile = TablesInsert<"user_senior_info">;
type contact = TablesInsert<"user_senior_contact">

export async function insertSeniorProfile(profile: profile, contact: contact) {
    const supabase = await createClient();
    const {data:user, error: userError} = await getUserInfo();
    if (!user)
        return {data: null, error: userError}
    if (user.has_profile) {
        console.log("profile exists")
        return {data: null, error: "profile already exists"}
    }
    const {data, error} = await supabase.from("user_senior_info").upsert(profile)
    if (error) {
        console.log(error)
        return {data: null, error}
    }
    const { error: othersError} = await supabase.from("user_senior_contact").upsert(contact)
    if (othersError) {
        console.log(othersError)
        return {data: null, error: othersError}
    }
    const { error: updateError } = await supabase
        .from("stepsenior_users")
        .update({ has_profile: true })
        .eq("id", user.id);
    if (updateError)
        return {data: null, error: updateError}
    console.log("it gets to the end?")
    await sendEmail('seniorRegister', user.email)
    return {data, error: null};
}