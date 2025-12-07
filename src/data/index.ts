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
        price: '₹25,000',
        description: 'Complete HD bridal look for your big day.',
        duration: '3 hours',
        features: ['Consultation', 'Premium lashes', 'Draping assistance', 'Touch-up kit']
    },
    {
        id: '2',
        title: 'Sangeet / Reception',
        price: '₹15,000',
        description: 'Glamorous look for pre-wedding functions.',
        duration: '2 hours',
        features: ['HD makeup', 'Hairstyling included', 'Lashes included']
    },
    {
        id: '3',
        title: 'Party Makeup',
        price: '₹8,000',
        description: 'Elegant look for guests and parties.',
        duration: '1.5 hours',
        features: ['Long-lasting base', 'Eye makeup focus', 'Hair styling']
    }
];

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
    {
        id: '1',
        category: 'bridal',
        imageUrl: 'https://images.unsplash.com/photo-1595959183082-7bce70848ddb?auto=format&fit=crop&q=80',
        title: 'Traditional Red'
    },
    {
        id: '2',
        category: 'party',
        imageUrl: 'https://images.unsplash.com/photo-1583265627959-fb7c91d52684?auto=format&fit=crop&q=80',
        title: 'Sangeet Glam'
    },
    {
        id: '3',
        category: 'editorial',
        imageUrl: 'https://images.unsplash.com/photo-1616782298711-e4026bd6df45?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Editorial Shoot'
    },
    {
        id: '4',
        category: 'bridal',
        imageUrl: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Modern Bride'
    },
    {
        id: '5',
        category: 'sfx',
        imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80',
        title: 'Creative Look'
    }
];

export const INITIAL_GALLERY: GalleryItem[] = [
    { id: '1', imageUrl: 'https://images.unsplash.com/photo-1610996131496-e1e36ba59cb6?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Jewelry Details' },
    { id: '2', imageUrl: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80', caption: 'Product Collection' },
    { id: '3', imageUrl: 'https://images.unsplash.com/photo-1522337360705-8b13d5204369?auto=format&fit=crop&q=80', caption: 'Getting Ready' },
];
