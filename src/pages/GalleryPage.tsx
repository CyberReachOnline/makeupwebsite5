import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useData } from '../context/DataContext';

const GalleryPage: React.FC = () => {
    const { gallery } = useData();

    return (
        <>
            <Helmet>
                <title>Gallery | LuxeGlow Makeup Artist</title>
                <meta name="description" content="Behind the scenes and studio moments." />
            </Helmet>

            <div className="bg-white dark:bg-gray-900 py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">Gallery</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            A collection of moments, details, and behind-the-scenes glimpses.
                        </p>
                    </div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {gallery.map(item => (
                            <div key={item.id} className="break-inside-avoid rounded-xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
                                <img
                                    src={item.imageUrl}
                                    alt={item.caption || 'Gallery image'}
                                    loading="lazy"
                                    className="w-full h-auto"
                                />
                                {item.caption && (
                                    <div className="p-4">
                                        <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">{item.caption}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default GalleryPage;
