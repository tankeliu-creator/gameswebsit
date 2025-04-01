// import React from 'react';
import { Category, Game } from '../types';
import GameCard from './GameCard';
// import * as Icons from 'lucide-react';

interface CategorySectionProps {
  category: Category;
  games: Game[];
}

export default function CategorySection({ category, games }: CategorySectionProps) {
  // const Icon = Icons[category.icon as keyof typeof Icons];

  return (
    <section id={category.id} className="py-8">
      <div className="flex items-center space-x-2 mb-6">
        {/*{Icon && <Icon className="text-gray-600" size={24} />}*/}
        <h2 className="text-2xl font-semibold text-gray-900">{category.name}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}