import { FlashCard } from '@/features/flashcard';

export async function fetchFlashCard(text: string): Promise<FlashCard> {
    console.log(`${process.env.NEXT_PUBLIC_API_URL}/phrase/explain`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/phrase/explain`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
    });
    console.log(res);
    if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
    }

    return res.json();
}
