"use server"
import { createClient } from "@lib/supabase/server";
import {TablesInsert} from "@/database.types";

type WishListInfo = TablesInsert<"wishlist">

export async function insertWish(content: string, name: string="") {
    const supabase = await createClient();
    const info: WishListInfo = {content, creator: name?name:null};
    const {data, error} = await supabase.from("wishlist").insert(info);
    if (error || !data) {
        console.log(error)
        return {data: null, error: error}
    }
    return {data, error:null}
}