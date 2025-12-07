import React from 'react';
import { Dialog } from '@headlessui/react';
import { FiX } from 'react-icons/fi';
import type { PortfolioItem } from '../data';
import { Link } from 'react-router-dom';

interface LightboxProps {
    isOpen: boolean;
    close: () => void;
    item: PortfolioItem | null;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, close, item }) => {
    if (!item) return null;

    return (
        <Dialog open={isOpen} onClose={close} className="relative z-50">
            <div className="fixed inset-0 bg-black/90" aria-hidden="true" />

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="relative bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row">
                    <button
                        onClick={close}
                        className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    >
                        <FiX size={24} />
                    </button>

                    <div className="w-full md:w-2/3 h-64 md:h-auto bg-black flex items-center justify-center">
                        <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>

                    <div className="w-full md:w-1/3 p-8 flex flex-col justify-center">
                        <Dialog.Title className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-2">
                            {item.title}
                        </Dialog.Title>
                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-6 capitalize">
                            {item.category}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">
                            Love this look? Book a similar style for your special event.
                        </p>
                        <Link
                            to={`/contact?service=${encodeURIComponent(item.title)}`}
                            onClick={close}
                            className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
                        >
                            Book This Look
                        </Link>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};

export default Lightbox;
