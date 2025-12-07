import React, { createContext, useContext, useEffect, useState } from 'react';
import { storage } from '../utils/storage';
import { INITIAL_SERVICES, INITIAL_PORTFOLIO, INITIAL_GALLERY, INITIAL_COURSES } from '../data';
import type { Service, PortfolioItem, GalleryItem, Course } from '../data';

interface DataContextType {
    services: Service[];
    portfolio: PortfolioItem[];
    gallery: GalleryItem[];
    courses: Course[];
    updateServices: (services: Service[]) => void;
    updatePortfolio: (portfolio: PortfolioItem[]) => void;
    updateGallery: (gallery: GalleryItem[]) => void;
    updateCourses: (courses: Course[]) => void;
    resetData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [services, setServices] = useState<Service[]>(INITIAL_SERVICES);
    const [portfolio, setPortfolio] = useState<PortfolioItem[]>(INITIAL_PORTFOLIO);
    const [gallery, setGallery] = useState<GalleryItem[]>(INITIAL_GALLERY);
    const [courses, setCourses] = useState<Course[]>(INITIAL_COURSES);

    useEffect(() => {
        const storedServices = storage.get<Service[]>('services', []);
        if (storedServices.length > 0) setServices(storedServices);

        const storedPortfolio = storage.get<PortfolioItem[]>('portfolio', []);
        if (storedPortfolio.length > 0) setPortfolio(storedPortfolio);

        const storedGallery = storage.get<GalleryItem[]>('gallery', []);
        if (storedGallery.length > 0) setGallery(storedGallery);

        const storedCourses = storage.get<Course[]>('courses', []);
        if (storedCourses.length > 0) setCourses(storedCourses);
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

    const updateCourses = (newCourses: Course[]) => {
        setCourses(newCourses);
        storage.set('courses', newCourses);
    };

    const resetData = () => {
        setServices(INITIAL_SERVICES);
        setPortfolio(INITIAL_PORTFOLIO);
        setGallery(INITIAL_GALLERY);
        setCourses(INITIAL_COURSES);
        storage.remove('services');
        storage.remove('portfolio');
        storage.remove('gallery');
        storage.remove('courses');
    };

    return (
        <DataContext.Provider value={{
            services, portfolio, gallery, courses,
            updateServices, updatePortfolio, updateGallery, updateCourses, resetData
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
