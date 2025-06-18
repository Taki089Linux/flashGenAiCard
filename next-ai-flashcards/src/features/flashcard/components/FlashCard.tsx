'use client';

import React from 'react';
import { marked } from 'marked';
import { FlashCard as FlashCardType } from '../types/flashcard.types';

interface Props {
    card: FlashCardType;
}

const FlashCard: React.FC<Props> = ({ card }) => {
    const uniqueExamples = Array.from(
        new Map(
            card.examples
                .filter(
                    e =>
                        e.sentence.toLowerCase() !== 'english sentence' &&
                        e.explanation.toLowerCase() !== 'simple meaning'
                )
                .map(e => [`${e.sentence.trim()}|${e.explanation.trim()}`, e])
        ).values()
    );

    return (
        <div className="max-w-3xl mx-auto bg-dark shadow-lg rounded-lg p-6 my-6">
            <h2 className="text-2xl font-bold mb-4">🔤 {card.phrase}</h2>

            <section className="mb-4">
                <h3 className="text-xl font-semibold mb-2">📘 Explanation</h3>
                <p className="mb-2"><strong>Definition:</strong> {card.meaning}</p>
                <p className="mb-2"><strong>Breakdown:</strong></p>
                <ul className="list-disc list-inside mb-2">
                    {card.breakdown.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p className="mb-2"><strong>Simple Meaning:</strong> {card.simpleMeaning}</p>
                <p className="mb-2"><strong>Usage Context:</strong> {card.usageContext}</p>
            </section>

            {uniqueExamples.length > 0 && (
                <section className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">🧠 Examples</h3>
                    <table className="table-auto border-collapse w-full">
                        <thead>
                        <tr>
                            <th className="border p-2 text-left">Sentence</th>
                            <th className="border p-2 text-left">Explanation</th>
                        </tr>
                        </thead>
                        <tbody>
                        {uniqueExamples.map((ex, i) => (
                            <tr key={i}>
                                <td className="border p-2">{ex.sentence}</td>
                                <td className="border p-2">{ex.explanation}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
            )}

            {card.similarPhrases.length > 0 && (
                <section className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">🔁 Similar Phrases</h3>
                    <ul className="list-disc list-inside">
                        {card.similarPhrases.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                </section>
            )}

            {card.tip && (
                <section className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">📌 Memory Tip</h3>
                    <p>{card.tip}</p>
                </section>
            )}

            {card.domainUsage && (
                <section>
                    <h3 className="text-xl font-semibold mb-2">🧩 Field Usage</h3>
                    <p>{card.domainUsage}</p>
                </section>
            )}
        </div>
    );
};


export default FlashCard;
