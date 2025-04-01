import { useState, useMemo } from 'react';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import { categories, games } from './data';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = useMemo(() => {
    if (!searchQuery) return games;
    const query = searchQuery.toLowerCase();
    return games.filter(
      game =>
        game.title.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 font-['Inter']">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {categories.map(category => (
          <CategorySection
            key={category.id}
            category={category}
            games={filteredGames.filter(game => game.category === category.id)}
          />
        ))}
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 GameHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;