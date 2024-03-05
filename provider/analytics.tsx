"use client";

import posthog from "posthog-js";

class AnalyticsWrapper {
    constructor() {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
            autocapture: false,
            capture_pageview: false,
            capture_pageleave: false,
        });
    }
    actions = {
        events: {
            pageOpened: (pageName: string) => {
                posthog.capture("$pageview", {
                    pageName,
                });
            },
            externalLinkClicked: (params: object) => {
                posthog.capture("External Link Clicked", params);
            }
        },
    };
}

const NewAnalyticsWrapper = new AnalyticsWrapper();
export default NewAnalyticsWrapper;