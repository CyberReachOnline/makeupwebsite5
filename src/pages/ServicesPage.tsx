import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceCard from '../components/ServiceCard';
import { useData } from '../context/DataContext';

const ServicesPage: React.FC = () => {
    const { services } = useData();

    return (
        <>
            <Helmet>
                <title>Services | LuxeGlow Makeup Artist</title>
                <meta name="description" content="Explore our makeup services including bridal, party glam, and editorial looks." />
            </Helmet>

            <div className="bg-gray-50 dark:bg-gray-800/50 py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">Our Services</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            We offer a wide range of professional makeup services tailored to your specific needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map(service => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesPage;
