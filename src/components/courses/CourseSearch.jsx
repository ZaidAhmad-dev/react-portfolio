"use client";

import { useMemo, useRef, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./Course.module.css";

export default function CourseSearch() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const inputRef = useRef(null);
    const [isPending, startTransition] = useTransition();

    const qFromUrl = searchParams.get("q") ?? "";

    // Debounced URL update
    const updateUrl = useMemo(() => {
        return (raw) => {
            clearTimeout(t);
            let t = setTimeout(() => {
                const params = new URLSearchParams(searchParams.toString());
                const trimmed = raw.trim();

                if (trimmed) params.set("q", trimmed);
                else params.delete("q");

                const qs = params.toString();

                startTransition(() => {
                    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
                });
            }, 250);
        };
    }, [router, pathname, searchParams]);

    function onChange(e) {
        updateUrl(e.target.value);
    }

    function clear() {
        if (inputRef.current) inputRef.current.value = "";
        startTransition(() => router.replace(pathname, { scroll: false }));
    }

    return (
        <div className={styles.searchWrapper}>
            <form role="search" aria-label="Search courses" onSubmit={(e) => e.preventDefault()}>
                <div className={`input-group ${styles.inputGroup}`}>
                    <input
                        ref={inputRef}
                        id="course-search"
                        type="search"
                        defaultValue={qFromUrl}
                        onChange={onChange}
                        placeholder="Search courses..."
                        className={styles.searchInput}
                        autoComplete="off"
                    />

                    <button type="button" onClick={clear} className={styles.searchButton} aria-label="Clear">
                        ×
                    </button>

                    <button type="button" className={styles.searchButton} aria-label="Search" disabled={isPending}>
                        🔍
                    </button>
                </div>
            </form>
        </div>
    );
}
