
export interface Feature {
    id: string;
    title: string;
    question: string;
    description: string;
    benefits: string[];
    differentiator?: string;
    note?: string;
    image: string;
}

export interface MarketingFeature {
    id: string;
    title: string;
    description: string;
    details: string[];
    seoNote?: string;
    automationNote?: string;
    image: string;
}
