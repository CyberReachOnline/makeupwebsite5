import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import PortfolioGrid from '../components/PortfolioGrid';
import { useData } from '../context/DataContext';

const Home: React.FC = () => {
    const { services } = useData();
    const featuredServices = services.slice(0, 3);

    return (
        <>
            <Helmet>
                <title>LuxeGlow | Professional Makeup Artist</title>
                <meta name="description" content="Professional makeup artist specializing in bridal, editorial, and event makeup. Book your appointment today." />
            </Helmet>

            <Hero />

            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Discover our range of professional makeup services designed to enhance your natural beauty.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredServices.map(service => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/services" className="inline-block border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-8 py-3 rounded-full font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors">
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">Selected Works</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            A glimpse into our portfolio of stunning transformations.
                        </p>
                    </div>

                    <PortfolioGrid />

                    <div className="text-center mt-12">
                        <Link to="/portfolio" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30">
                            View Full Portfolio
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
