import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-12 pb-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
                            Luxe<span className="text-primary-500">Glow</span>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Professional makeup artistry for weddings, events, and editorial shoots. Enhancing your natural beauty with a touch of luxury.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors"><FiInstagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors"><FiFacebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors"><FiTwitter size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 text-sm">Services</Link></li>
                            <li><Link to="/portfolio" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 text-sm">Portfolio</Link></li>
                            <li><Link to="/gallery" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 text-sm">Gallery</Link></li>
                            <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 text-sm">Book Now</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-600 dark:text-gray-400 text-sm">Bridal Makeup</li>
                            <li className="text-gray-600 dark:text-gray-400 text-sm">Party Glam</li>
                            <li className="text-gray-600 dark:text-gray-400 text-sm">Editorial Shoots</li>
                            <li className="text-gray-600 dark:text-gray-400 text-sm">Makeup Lessons</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                                <FiPhone className="mr-2 text-primary-500" /> +1 (555) 123-4567
                            </li>
                            <li className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                                <FiMail className="mr-2 text-primary-500" /> hello@luxeglow.com
                            </li>
                            <li className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                                <FiMapPin className="mr-2 text-primary-500" /> Los Angeles, CA
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                    <p className="text-gray-500 dark:text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} LuxeGlow Makeup Artistry. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
