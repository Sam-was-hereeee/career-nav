"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getUserInfo } from "@lib/auth/actions";
import {Tables} from "@/database.types";
export type UserInfo = Tables<"stepsenior_users">

interface UserContextType {
    user: UserInfo | null;
    isLoading: boolean;
    error: string | null;
    refetchUser: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserInfo | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUser = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const { data, error } = await getUserInfo();

            if (error || !data) {
                setError(error || "Failed to fetch user data");
                setUser(null);
                return;
            }

            setUser(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const value = {
        user,
        isLoading,
        error,
        refetchUser: fetchUser,
    };

    return (<UserContext.Provider value={value}>{children}</UserContext.Provider>)
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}