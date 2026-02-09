"use client";

import { useState } from "react";
import { CourseContext } from "@/contexts/CourseContext";

export default function Providers({ children, initialCourses }) {
    const [searchValue, setSearchValue] = useState("");
    const [courses] = useState(initialCourses ?? []);

    return (
        <CourseContext.Provider value={{ searchValue, setSearchValue, courses }}>
            {children}
        </CourseContext.Provider>
    );
}
