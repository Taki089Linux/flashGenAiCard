import { Injectable } from '@nestjs/common';
import {FlashCard} from "./dto/flashcard.dto";

@Injectable()
export class FlashcardFormatterService {
    format(raw: string): FlashCard {
        const get = (label: string) => raw.split(label)[1]?.split('\n\n')[0].trim() ?? '';

        const extractTable = (): FlashCard['examples'] =>{
            const tableSection = raw.split("🧠 Examples:")[1]?.split('🔁')[0] ?? '';
            return tableSection.split('\n').filter((line)=> line.includes('|') && !line.includes('---'))
                .map((line)=>{
                    const [sentence, explanation] = line.split('|').map((s)=>s.trim());
                    return {sentence, explanation};
                });
        };
        const parseList = (label: string): string[] =>
            get(label)
                .split(/[-•]/)
                .map((s) => s.trim())
                .filter(Boolean);

        return {
            phrase: get('🔤 Phrase:'),
            meaning: get('Definition:'),
            breakdown: parseList('Phrase breakdown:'),
            simpleMeaning: get('Meaning (in simple English):'),
            usageContext: get('Usage context:'),
            examples: extractTable(),
            similarPhrases: parseList('Similar phrases:'),
            tip: get('Memory tip:'),
            domainUsage: get('Field usage'),
        };
    }
    
}
