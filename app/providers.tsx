'use client'

import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"
import { useEffect } from "react"

if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
        autocapture: false,
        capture_pageview: false,
        capture_pageleave: false,
    })
}

export default function PHProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        posthog.capture('$pageview', { pageName: "home" })
    }, [])
    return (
        <PostHogProvider client={posthog}>
            {children}
        </PostHogProvider>
    )
}