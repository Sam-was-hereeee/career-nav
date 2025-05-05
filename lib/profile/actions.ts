"use server"
import {createClient} from "@lib/supabase/server";
import {TablesInsert} from "@/database.types";
import {getUserInfo} from "@lib/auth/actions";

type profile = TablesInsert<"user_senior_info">;

export async function insertSeniorProfile(profile: profile) {
    const supabase = await createClient();
    const {data:user, error: userError} = await getUserInfo();
    if (!user)
        return {data: null, error: userError}
    if (user.has_profile) {
        console.log("profile exists")
        return {data: null, error: "profile already exists"}
    }
    const {data, error} = await supabase.from("user_senior_info").insert(profile)
    if (error) {
        console.log(error)
        return {data: null, error}
    }
    const { error: updateError } = await supabase
        .from("stepsenior_users")
        .update({ has_profile: true })
        .eq("id", user.id);
    if (updateError)
        return {data: null, error: updateError}
    console.log("it gets to the end?")
    return {data, error: null};
}