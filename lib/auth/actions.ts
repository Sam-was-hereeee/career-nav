'use server'

import { createClient } from "@lib/supabase/server";
import {TablesInsert} from "@/database.types";

type UserInsert = TablesInsert<"stepsenior_users">

export async function signUpWithEmailAndPassword(
    email: string,
    password: string,
    isSenior: boolean,
) {
    const supabase = await createClient();
    console.log("in function")
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/register/filldata`,
        }
    });
    if (error) {
        console.log(error)
        return { data, error: error.message };
    }
    if (!data.user) {
        return { data, error: "no data lol" };
    }
    const supabaseWithAuth = await createClient(data.session?.access_token);
    console.log(data)
    const userInfo: UserInsert = {email:email, has_profile: false, is_senior: isSenior, id: data.user.id};
    const {data: profileData, error: profileError} =
        await supabaseWithAuth.from("stepsenior_users").upsert(userInfo)
    console.log(profileData, profileError)
    if (profileError) {
        return { data:profileData, error: profileError };
    }
    console.log(data, error)
    return { data, error: null };
}

export async function authEmailResend(email: string) {
    const supabase = await createClient();
    const { error } = await supabase.auth.resend({
        type: 'signup',
        email,
        options: {
            emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/register/filldata`
        }
    })
    if (error) {
        console.log(error)
        return {data: null, error}
    }
}

export async function signInWithEmail(email: string, password: string) {
    const supabase = await createClient();
    const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password
    })
    if (error) {
        return { data: null, error: error.message };
    }
    return {data, error:null};
}

export const signUpWithGoogle = async () => {
    //Todo

}

export async function signInWithGoogle() {

}

export async function getUserInfo() {
    const supabase = await createClient()
    const {data:authData, error:authError} = await supabase.auth.getUser();
    if (authError) {
        console.log(authError)
        return { data: null, error: authError.message };
    }
    const {data, error} = await supabase.from("stepsenior_users").select().eq("id", authData.user.id).single()
    if (error || !data) {
        console.log(error)
        return { data: null, error: error.message };
    }
    console.log(data, error)
    return {data, error: null};
}

export async function signOut() {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
        return { error: error.message };
    }
    return { error: null };
}

