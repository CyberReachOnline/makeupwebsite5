import React, { createContext, useContext, useEffect, useState } from 'react';
import { storage } from '../utils/storage';
import { INITIAL_SERVICES, INITIAL_PORTFOLIO, INITIAL_GALLERY } from '../data';
import type { Service, PortfolioItem, GalleryItem } from '../data';

interface DataContextType {
    services: Service[];
    portfolio: PortfolioItem[];
    gallery: GalleryItem[];
    updateServices: (services: Service[]) => void;
    updatePortfolio: (portfolio: PortfolioItem[]) => void;
    updateGallery: (gallery: GalleryItem[]) => void;
    resetData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [services, setServices] = useState<Service[]>(INITIAL_SERVICES);
    const [portfolio, setPortfolio] = useState<PortfolioItem[]>(INITIAL_PORTFOLIO);
    const [gallery, setGallery] = useState<GalleryItem[]>(INITIAL_GALLERY);

    useEffect(() => {
        const storedServices = storage.get<Service[]>('services', []);
        if (storedServices.length > 0) setServices(storedServices);

        const storedPortfolio = storage.get<PortfolioItem[]>('portfolio', []);
        if (storedPortfolio.length > 0) setPortfolio(storedPortfolio);

        const storedGallery = storage.get<GalleryItem[]>('gallery', []);
        if (storedGallery.length > 0) setGallery(storedGallery);
    }, []);

    const updateServices = (newServices: Service[]) => {
        setServices(newServices);
        storage.set('services', newServices);
    };

    const updatePortfolio = (newPortfolio: PortfolioItem[]) => {
        setPortfolio(newPortfolio);
        storage.set('portfolio', newPortfolio);
    };

    const updateGallery = (newGallery: GalleryItem[]) => {
        setGallery(newGallery);
        storage.set('gallery', newGallery);
    };

    const resetData = () => {
        setServices(INITIAL_SERVICES);
        setPortfolio(INITIAL_PORTFOLIO);
        setGallery(INITIAL_GALLERY);
        storage.remove('services');
        storage.remove('portfolio');
        storage.remove('gallery');
    };

    return (
        <DataContext.Provider value={{
            services, portfolio, gallery,
            updateServices, updatePortfolio, updateGallery, resetData
        }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
