import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import type { PortfolioItem } from '../data';
import Lightbox from './Lightbox';
import { clsx } from 'clsx';

interface PortfolioGridProps {
    limit?: number;
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ limit }) => {
    const { portfolio } = useData();
    const [filter, setFilter] = useState<string>('all');
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

    const categories = ['all', ...Array.from(new Set(portfolio.map(item => item.category)))];

    const filteredItems = filter === 'all'
        ? portfolio
        : portfolio.filter(item => item.category === filter);

    const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={clsx(
                            'px-6 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300',
                            filter === cat
                                ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedItems.map(item => (
                    <div
                        key={item.id}
                        onClick={() => setSelectedItem(item)}
                        className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 aspect-[3/4]"
                    >
                        <img
                            src={item.imageUrl}
                            alt={item.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <h3 className="text-white font-serif text-xl font-bold">{item.title}</h3>
                            <p className="text-primary-300 text-sm capitalize">{item.category}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Lightbox
                isOpen={!!selectedItem}
                close={() => setSelectedItem(null)}
                item={selectedItem}
            />
        </div>
    );
};

export default PortfolioGrid;
