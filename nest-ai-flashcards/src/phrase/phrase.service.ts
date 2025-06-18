import { Injectable } from '@nestjs/common';
import {OpenRouterService} from "../openrouter/open-router.service";
import {FlashcardFormatterService} from "../flashcard/flashcard-formatter.service";

@Injectable()
export class PhraseService {
    constructor(private readonly openRouterService: OpenRouterService,
                private readonly flashCardFormatter: FlashcardFormatterService,) {
    }

    async explainPhrase(phrase:string) {
        const result = await this.openRouterService.getExplanation(phrase);
        return this.flashCardFormatter.format(result);
    }
}
