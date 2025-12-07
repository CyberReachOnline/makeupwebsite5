import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BookingForm from '../components/BookingForm';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

const ContactPage: React.FC = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const prefilledService = searchParams.get('service') || '';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Contact & Booking | LuxeGlow Makeup Artist</title>
                <meta name="description" content="Book your appointment or get in touch with us." />
            </Helmet>

            <div className="bg-gray-50 dark:bg-gray-900 py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Ready to book your look? Fill out the form below or contact us directly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                                <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <FiPhone className="mt-1 mr-4 text-primary-600 dark:text-primary-400 text-xl" />
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white">Phone</h4>
                                            <p className="text-gray-600 dark:text-gray-400">+91 98765 43210</p>
                                            <p className="text-sm text-gray-500">Available Mon-Fri, 9am - 6pm</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <FiMail className="mt-1 mr-4 text-primary-600 dark:text-primary-400 text-xl" />
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white">Email</h4>
                                            <p className="text-gray-600 dark:text-gray-400">hello@luxeglow.in</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <FiMapPin className="mt-1 mr-4 text-primary-600 dark:text-primary-400 text-xl" />
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white">Studio Location</h4>
                                            <p className="text-gray-600 dark:text-gray-400">101 Glamour Heights, Bandra West, Mumbai, 400050</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <FiClock className="mt-1 mr-4 text-primary-600 dark:text-primary-400 text-xl" />
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white">Hours</h4>
                                            <p className="text-gray-600 dark:text-gray-400">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                                            <p className="text-gray-600 dark:text-gray-400">Sunday: By Appointment Only</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Booking Form */}
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                            <BookingForm prefilledService={prefilledService} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
