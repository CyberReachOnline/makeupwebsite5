export interface Service {
    id: string;
    title: string;
    price: string;
    description: string;
    duration: string;
    features: string[];
}

export interface PortfolioItem {
    id: string;
    category: 'bridal' | 'editorial' | 'party' | 'sfx';
    imageUrl: string;
    title: string;
}

export interface GalleryItem {
    id: string;
    imageUrl: string;
    caption?: string;
}

export const INITIAL_SERVICES: Service[] = [
    {
        id: '1',
        title: 'Bridal Makeup',
        price: '$300',
        description: 'Complete bridal look including trial.',
        duration: '3 hours',
        features: ['Consultation', 'Trial session', 'Premium lashes', 'Touch-up kit']
    },
    {
        id: '2',
        title: 'Party Glam',
        price: '$150',
        description: 'Perfect for special occasions and events.',
        duration: '1.5 hours',
        features: ['Full face makeup', 'Lashes included', 'Long-lasting setting']
    },
    {
        id: '3',
        title: 'Editorial / Photoshoot',
        price: '$200',
        description: 'High-definition makeup for photography.',
        duration: '2 hours',
        features: ['HD products', 'Creative direction', 'On-set touch-ups (extra)']
    }
];

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
    {
        id: '1',
        category: 'bridal',
        imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80',
        title: 'Classic Bridal'
    },
    {
        id: '2',
        category: 'party',
        imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80',
        title: 'Evening Glam'
    },
    {
        id: '3',
        category: 'editorial',
        imageUrl: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?auto=format&fit=crop&q=80',
        title: 'Fashion Editorial'
    },
    {
        id: '4',
        category: 'bridal',
        imageUrl: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80',
        title: 'Modern Bride'
    },
    {
        id: '5',
        category: 'sfx',
        imageUrl: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&q=80',
        title: 'Creative SFX'
    }
];

export const INITIAL_GALLERY: GalleryItem[] = [
    { id: '1', imageUrl: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80', caption: 'Backstage' },
    { id: '2', imageUrl: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&q=80', caption: 'Product details' },
    { id: '3', imageUrl: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80', caption: 'Studio vibes' },
];
