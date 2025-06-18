import { Injectable } from '@nestjs/common';
import {ConfigService} from "@nestjs/config";
import {systemPrompt} from "../constant/system-prompt";
import OpenAI from 'openai';

@Injectable()
export class OpenRouterService {
    private readonly baseUrl: string;
    private readonly apiKey: string;
    private readonly defaultModel: string;
    private openai: OpenAI;

    constructor(private configService: ConfigService) {
        this.baseUrl = this.configService.get<string>('OPENROUTER_BASE_URL');
        this.apiKey = this.configService.get<string>('OPENROUTER_API_KEY');
        this.defaultModel = this.configService.get<string>('DEFAULT_MODEL');
        this.openai = new OpenAI({
            baseURL: this.baseUrl,
            apiKey: this.apiKey,
        });
    }

    async getExplanation(prompt: string): Promise<string>{
        const completion = await this.openai.chat.completions.create({
            model: this.defaultModel,
            messages: [
                {
                    "role": "system",
                    "content": [
                        {
                            "type": "text",
                            "text": systemPrompt
                        },
                    ]
                },
                {
                    role: 'user',
                    content: prompt,
                },
            ],

        },);
        return completion.choices[0].message.content;
    }

}
