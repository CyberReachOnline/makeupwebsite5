import React from 'react';
import { Link } from 'react-router-dom';
import type { Service } from '../data';
import { FiCheck } from 'react-icons/fi';

interface ServiceCardProps {
    service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">{service.title}</h3>
                    <span className="text-xl font-bold text-primary-600 dark:text-primary-400">{service.price}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">{service.description}</p>
                <div className="text-sm text-gray-500 dark:text-gray-500 mb-6 font-medium">Duration: {service.duration}</div>

                <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                            <FiCheck className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700">
                <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="block w-full text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                    Book Now
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
