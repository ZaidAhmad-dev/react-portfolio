"use client";

import dynamic from "next/dynamic";

const FloatingWhatsApp = dynamic(
    () => import("@/components/floatingButton/FloatingWhatsApp"),
    { ssr: false }
);

export default function ClientWidgets() {
    return <FloatingWhatsApp />;
}
