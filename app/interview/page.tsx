"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const InterviewPage = () => {
    const router = useRouter();

    useEffect(() => {
        const url = "https://www.instagram.com/p/DHyHjYdyYtb/";
        window.open(url, "_blank");
        router.back();
    }, []);

    return null;
};

export default InterviewPage;
