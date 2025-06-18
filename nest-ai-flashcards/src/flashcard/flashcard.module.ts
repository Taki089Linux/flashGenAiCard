import { Module } from '@nestjs/common';
import { FlashcardFormatterService } from './flashcard-formatter.service';

@Module({
  providers: [FlashcardFormatterService]
})
export class FlashcardModule {}
