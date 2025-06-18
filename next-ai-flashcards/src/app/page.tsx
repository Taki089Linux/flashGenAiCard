'use client';

import { useState } from 'react';
import { FlashCard, FlashCardComponent, fetchFlashCard } from '@/features/flashcard';

export default function HomePage() {
  const [input, setInput] = useState('');
  const [flashCard, setFlashCard] = useState<FlashCard | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setFlashCard(null);
    setLoading(true);

    try {
      const card = await fetchFlashCard(input);
      setFlashCard(card);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="max-w-4xl mx-auto p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          🧠 AI Dictionary Flashcard
        </h1>

        <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 items-stretch mb-8"
        >
          <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Enter an English phrase..."
          />
          <button
              type="submit"
              disabled={!input.trim() || loading}
              className={`rounded-lg px-6 py-3 font-medium transition-all ${
                  loading || !input.trim()
                      ? 'bg-blue-300 cursor-not-allowed text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
          >
            {loading ? 'Loading...' : 'Generate Flashcard'}
          </button>
        </form>

        {error && <p className="text-red-500 text-center">{error}</p>}

        {flashCard && <FlashCardComponent card={flashCard}/>}
      </div>
  );
}
