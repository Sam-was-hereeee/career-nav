import { createClient } from "@lib/supabase/server";

export async function signUpWithEmailAndPassword(
    email: string,
    password: string,
) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });
    if (error) {
        return { data, error: error.message };
    }
    return { data, error: null };
}

export async function signOut() {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
        return { error: error.message };
    }
    return { error: null };
}

