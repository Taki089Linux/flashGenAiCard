export interface FlashCard {
    phrase: string;
    meaning: string;
    breakdown: string[];
    simpleMeaning: string;
    usageContext: string;
    examples: {
        sentence: string;
        explanation: string;
    }[];
    similarPhrases: string[];
    tip: string;
    domainUsage: string;
}
