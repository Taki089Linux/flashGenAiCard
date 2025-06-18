import {FlashCard} from "@/features/flashcard/types/flashcard.types";

export class FlashcardFormatterService {
    static format(raw: any): FlashCard {
        return {
            phrase: raw.phrase?.trim() ?? "",
            meaning: raw.meaning,
            breakdown: raw.breakdown ?? [],
            simpleMeaning: raw.simpleMeaning,
            usageContext: raw.usageContext,
            examples: raw.examples ?? [],
            similarPhrases: raw.similarPhrases ?? [],
            tip: raw.tip ?? "",
            domainUsage: raw.domainUsage ?? "",
        };
    }
}