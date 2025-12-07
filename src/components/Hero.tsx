import React from 'react';
import BookingForm from './BookingForm';

const Hero: React.FC = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center pt-16">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1457972729786-0411a3b2b626?auto=format&fit=crop&q=80"
                    alt="Makeup Artist Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent dark:from-gray-900/95 dark:via-gray-900/80 dark:to-gray-900/40"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
                        Reveal Your <span className="text-primary-600 dark:text-primary-500">Inner Radiance</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-lg">
                        Professional makeup artistry tailored to your unique style. From bridal elegance to editorial edge, let's create your perfect look.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#portfolio" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            View Portfolio
                        </a>
                    </div>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700">
                    <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900 dark:text-white">Quick Booking</h2>
                    <BookingForm compact />
                </div>
            </div>
        </div>
    );
};

export default Hero;
