export async function getChannelPlaylists() {
    const channelId = process.env.YOUTUBE_CHANNEL_ID;
    const apiKey = process.env.YOUTUBE_API_KEY;

    if (!channelId || !apiKey) return [];

    const url = new URL("https://youtube.googleapis.com/youtube/v3/playlists");
    url.searchParams.set("part", "snippet");
    url.searchParams.set("maxResults", "50");
    url.searchParams.set("channelId", channelId);
    url.searchParams.set("key", apiKey);

    const res = await fetch(url, {
        next: { cache: "no-store" }
    });

    if (!res.ok) return [];
    const data = await res.json();
    return data.items ?? [];
}
