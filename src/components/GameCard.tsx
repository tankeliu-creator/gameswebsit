// import React from 'react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={game.imageUrl}
        alt={game.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{game.title}</h3>
        <div className="mt-1 flex items-center space-x-2">
          <span className="text-sm font-medium text-blue-600">{game.style}</span>
          <span className="text-gray-300">•</span>
          <span className="text-sm text-gray-600 capitalize">{game.category}</span>
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{game.description}</p>
      </div>
    </div>
  );
}