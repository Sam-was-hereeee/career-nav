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
        return {data: null, error: "profile already exists"}
    }
    const {data, error} = await supabase.from("user_senior_info").insert(profile)
    if (error) {
        return {data: null, error}
    }
    return {data, error: null};
}