"use client";

import { useEffect } from "react";

const InterviewPage = () => {
    useEffect(() => {
        const url = "https://www.instagram.com/p/DHyHjYdyYtb/";
        window.location.href = url;
    }, []);
};

export default InterviewPage;
