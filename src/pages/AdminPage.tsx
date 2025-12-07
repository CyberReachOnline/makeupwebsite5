import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { storage } from '../utils/storage';
import { FiTrash2, FiPlus } from 'react-icons/fi';
import type { Service, PortfolioItem, GalleryItem } from '../data';

const AdminPage: React.FC = () => {
    const navigate = useNavigate();
    const { services, portfolio, gallery, updateServices, updatePortfolio, updateGallery } = useData();
    const [activeTab, setActiveTab] = useState<'services' | 'portfolio' | 'gallery'>('services');

    useEffect(() => {
        const isAuthenticated = storage.get('isAdminAuthenticated', false);
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        storage.remove('isAdminAuthenticated');
        navigate('/login');
    };

    // Service Form State
    const [newService, setNewService] = useState<Partial<Service>>({ title: '', price: '', description: '', duration: '', features: [] });


    const addService = () => {
        if (!newService.title || !newService.price) return;
        const service: Service = {
            id: Date.now().toString(),
            title: newService.title!,
            price: newService.price!,
            description: newService.description || '',
            duration: newService.duration || '',
            features: newService.features || []
        };
        updateServices([...services, service]);
        setNewService({ title: '', price: '', description: '', duration: '', features: [] });
    };

    const deleteService = (id: string) => {
        updateServices(services.filter(s => s.id !== id));
    };

    // Portfolio Form State
    const [newPortfolio, setNewPortfolio] = useState<Partial<PortfolioItem>>({ title: '', category: 'bridal', imageUrl: '' });

    const addPortfolio = () => {
        if (!newPortfolio.title || !newPortfolio.imageUrl) return;
        const item: PortfolioItem = {
            id: Date.now().toString(),
            title: newPortfolio.title!,
            category: newPortfolio.category as any,
            imageUrl: newPortfolio.imageUrl!
        };
        updatePortfolio([...portfolio, item]);
        setNewPortfolio({ title: '', category: 'bridal', imageUrl: '' });
    };

    const deletePortfolio = (id: string) => {
        updatePortfolio(portfolio.filter(p => p.id !== id));
    };

    // Gallery Form State
    const [newGallery, setNewGallery] = useState<Partial<GalleryItem>>({ imageUrl: '', caption: '' });

    const addGallery = () => {
        if (!newGallery.imageUrl) return;
        const item: GalleryItem = {
            id: Date.now().toString(),
            imageUrl: newGallery.imageUrl!,
            caption: newGallery.caption
        };
        updateGallery([...gallery, item]);
        setNewGallery({ imageUrl: '', caption: '' });
    };

    const deleteGallery = (id: string) => {
        updateGallery(gallery.filter(g => g.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
                    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</button>
                </div>

                <div className="flex space-x-4 mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
                    {(['services', 'portfolio', 'gallery'] as const).map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded capitalize font-medium ${activeTab === tab ? 'bg-primary-600 text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Services Management */}
                {activeTab === 'services' && (
                    <div className="space-y-8">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Add New Service</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input placeholder="Title" className="p-2 border rounded dark:bg-gray-700 dark:text-white" value={newService.title} onChange={e => setNewService({ ...newService, title: e.target.value })} />
                                <input placeholder="Price" className="p-2 border rounded dark:bg-gray-700 dark:text-white" value={newService.price} onChange={e => setNewService({ ...newService, price: e.target.value })} />
                                <input placeholder="Duration" className="p-2 border rounded dark:bg-gray-700 dark:text-white" value={newService.duration} onChange={e => setNewService({ ...newService, duration: e.target.value })} />
                                <input placeholder="Description" className="p-2 border rounded dark:bg-gray-700 dark:text-white" value={newService.description} onChange={e => setNewService({ ...newService, description: e.target.value })} />
                            </div>
                            <button onClick={addService} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center"><FiPlus className="mr-2" /> Add Service</button>
                        </div>

                        <div className="grid gap-4">
                            {services.map(service => (
                                <div key={service.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">{service.title}</h4>
                                        <p className="text-sm text-gray-500">{service.price} - {service.duration}</p>
                                    </div>
                                    <button onClick={() => deleteService(service.id)} className="text-red-500 hover:text-red-700"><FiTrash2 size={20} /></button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Portfolio Management */}
                {activeTab === 'portfolio' && (
                    <div className="space-y-8">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Add Portfolio Item</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <input placeholder="Title" className="p-2 border rounded dark:bg-gray-700 dark:text-white" value={newPortfolio.title} onChange={e => setNewPortfolio({ ...newPortfolio, title: e.target.value })} />
                                <select className="p-2 border rounded dark:bg-gray-700 dark:text-white" value={newPortfolio.category} onChange={e => setNewPortfolio({ ...newPortfolio, category: e.target.value as any })}>
                                    <option value="bridal">Bridal</option>
                                    <option value="party">Party</option>
                                    <option value="editorial">Editorial</option>
                                    <option value="sfx">SFX</option>
                                </select>
                                <input placeholder="Image URL" className="p-2 border rounded dark:bg-gray-700 dark:text-white" value={newPortfolio.imageUrl} onChange={e => setNewPortfolio({ ...newPortfolio, imageUrl: e.target.value })} />
                            </div>
                            <button onClick={addPortfolio} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center"><FiPlus className="mr-2" /> Add Item</button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {portfolio.map(item => (
                                <div key={item.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow relative group">
                                    <img src={item.imageUrl} alt={item.title} className="w-full h-40 object-cover rounded mb-2" />
                                    <h4 className="font-bold text-sm text-gray-900 dark:text-white">{item.title}</h4>
                                    <p className="text-xs text-gray-500 capitalize">{item.category}</p>
                                    <button onClick={() => deletePortfolio(item.id)} className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><FiTrash2 size={16} /></button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Gallery Management */}
                {activeTab === 'gallery' && (
                    <div className="space-y-8">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Add Gallery Image</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input placeholder="Image URL" className="p-2 border rounded dark:bg-gray-700 dark:text-white" value={newGallery.imageUrl} onChange={e => setNewGallery({ ...newGallery, imageUrl: e.target.value })} />
                                <input placeholder="Caption (Optional)" className="p-2 border rounded dark:bg-gray-700 dark:text-white" value={newGallery.caption} onChange={e => setNewGallery({ ...newGallery, caption: e.target.value })} />
                            </div>
                            <button onClick={addGallery} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center"><FiPlus className="mr-2" /> Add Image</button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {gallery.map(item => (
                                <div key={item.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow relative group">
                                    <img src={item.imageUrl} alt={item.caption} className="w-full h-40 object-cover rounded mb-2" />
                                    {item.caption && <p className="text-xs text-gray-500">{item.caption}</p>}
                                    <button onClick={() => deleteGallery(item.id)} className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><FiTrash2 size={16} /></button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPage;
