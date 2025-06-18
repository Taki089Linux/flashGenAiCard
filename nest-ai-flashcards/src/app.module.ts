import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenRouterService } from './openrouter/open-router.service';
import { PhraseController } from './phrase/phrase.controller';
import { OpenRouterModule } from './openrouter/open-router.module';
import {ConfigModule} from "@nestjs/config";
import { PhraseService } from './phrase/phrase.service';
import { FlashcardModule } from './flashcard/flashcard.module';
import {FlashcardFormatterService} from "./flashcard/flashcard-formatter.service";

@Module({
  imports: [OpenRouterModule, ConfigModule.forRoot({ isGlobal: true }), FlashcardModule],
  controllers: [AppController, PhraseController],
  providers: [AppService, OpenRouterService, PhraseService, FlashcardFormatterService],
})
export class AppModule {}
