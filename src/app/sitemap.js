// app/sitemap.js
const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://zaidahmaddev.com').replace(/\/$/, '')

export default function sitemap() {
    const lastModified = new Date()

    return [
        {
            url: `${BASE_URL}/`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/courses`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/projects`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/clients`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ]
}