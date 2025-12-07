import React from 'react';
import { Helmet } from 'react-helmet-async';
import PortfolioGrid from '../components/PortfolioGrid';

const PortfolioPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Portfolio | LuxeGlow Makeup Artist</title>
                <meta name="description" content="Browse our portfolio of bridal, editorial, and special occasion makeup." />
            </Helmet>

            <div className="bg-white dark:bg-gray-900 py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">Portfolio</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Explore our diverse collection of looks. Filter by category to find your inspiration.
                        </p>
                    </div>

                    <PortfolioGrid />
                </div>
            </div>
        </>
    );
};

export default PortfolioPage;
