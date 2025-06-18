import { useState, useEffect } from "react";
import { FlashCard } from "../types/flashcard.types";

export const useFlashCard = (source: any) => {
    const [card, setCard] = useState<FlashCard | null>(null);

    useEffect(() => {
        if (source) {
            // Simulate formatting from raw AI data
            import("../services/flashcardFormatter.service").then(({ FlashcardFormatterService }) => {
                const formatted = FlashcardFormatterService.format(source);
                setCard(formatted);
            });
        }
    }, [source]);

    return card;
};
