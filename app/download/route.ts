import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const files = {
    "shopify-speed-checklist": {
        diskName: "zaid-ahmad-shopify-speed-checklist.pdf",
        downloadName: "zaid-ahmad-shopify-speed-checklist.pdf",
    },
    "react-debugging-cheatsheet": {
        diskName: "zaid-ahmad-react-debugging-cheatsheet.pdf",
        downloadName: "zaid-ahmad-react-debugging-cheatsheet.pdf",
    },
} as const;

type ResourceKey = keyof typeof files;

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const resource = searchParams.get("resource") as ResourceKey | null;

    if (!resource || !(resource in files)) {
        return NextResponse.redirect(new URL("/resources?download=invalid", request.url), 302);
    }

    const file = files[resource];
    const filePath = path.join(
        process.cwd(),
        "public",
        "lead-magnets",
        file.diskName
    );

    try {
        const buffer = await fs.readFile(filePath);

        return new Response(buffer, {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": `attachment; filename="${file.downloadName}"`,
                "Cache-Control": "private, no-store",
            },
        });
    } catch {
        return NextResponse.redirect(new URL("/resources?download=missing", request.url), 302);
    }
}