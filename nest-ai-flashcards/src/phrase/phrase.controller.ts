import {Body, Controller, Post} from '@nestjs/common';
import {PhraseService} from "./phrase.service";

@Controller('phrase')
export class PhraseController {
    constructor(private readonly phraseService: PhraseService) {}

    @Post('explain')
    async explain(@Body('text') text: string) {
        return this.phraseService.explainPhrase(text);
    }
}
