import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { generateWhatsAppLink, createBookingMessage, DEFAULT_PHONE } from '../utils/whatsapp';
import { storage } from '../utils/storage';
import { clsx } from 'clsx';

interface BookingFormProps {
    compact?: boolean;
    prefilledService?: string;
    className?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ compact = false, prefilledService = '', className }) => {
    const { services } = useData();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: prefilledService,
        date: '',
        notes: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Save to local storage if not compact (or always, as a record)
        if (!compact) {
            const bookings = storage.get<any[]>('local_bookings', []);
            bookings.push({ ...formData, timestamp: new Date().toISOString() });
            storage.set('local_bookings', bookings);
        }

        const message = createBookingMessage(formData);
        const link = generateWhatsAppLink(DEFAULT_PHONE, message);
        window.open(link, '_blank');
    };

    return (
        <form onSubmit={handleSubmit} className={clsx('space-y-4', className)}>
            {!compact && <h3 className="text-2xl font-serif font-bold mb-6 text-gray-900 dark:text-white">Book Your Appointment</h3>}

            <div className={clsx('grid gap-4', compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2')}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className={clsx('grid gap-4', compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2')}>
                <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Service</label>
                    <select
                        id="service"
                        name="service"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        value={formData.service}
                        onChange={handleChange}
                    >
                        <option value="">Select a service</option>
                        {services.map(s => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Preferred Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        value={formData.date}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {!compact && (
                <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Notes (Optional)</label>
                    <textarea
                        id="notes"
                        name="notes"
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        value={formData.notes}
                        onChange={handleChange}
                    />
                </div>
            )}

            <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-primary-500/30 transition-all transform hover:-translate-y-0.5"
            >
                {compact ? 'Book via WhatsApp' : 'Send Booking Request'}
            </button>
        </form>
    );
};

export default BookingForm;
