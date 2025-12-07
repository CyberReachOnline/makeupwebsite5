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

export interface Course {
    id: string;
    title: string;
    price: string;
    duration: string;
    description: string;
    curriculum: string[];
    imageUrl: string;
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
        imageUrl: '/portfolio/bridal-blue-1.png',
        title: 'Blue Bridal Elegance'
    },
    {
        id: '2',
        category: 'bridal',
        imageUrl: '/portfolio/bridal-blue-2.png',
        title: 'Bridal Glam'
    },
    {
        id: '3',
        category: 'bridal',
        imageUrl: '/portfolio/traditional-saree.png',
        title: 'Traditional Maharashtrian'
    },
    {
        id: '4',
        category: 'party',
        imageUrl: '/portfolio/party-glam.png',
        title: 'Evening Party Look'
    },
    {
        id: '5',
        category: 'editorial',
        imageUrl: '/portfolio/hairstyle.png',
        title: 'Hairstyling Artistry'
    }
];

export const INITIAL_GALLERY: GalleryItem[] = [
    { id: '1', imageUrl: 'https://images.unsplash.com/photo-1610996131496-e1e36ba59cb6?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Jewelry Details' },
    { id: '2', imageUrl: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80', caption: 'Product Collection' },
    { id: '3', imageUrl: 'https://images.unsplash.com/photo-1522337360705-8b13d5204369?auto=format&fit=crop&q=80', caption: 'Getting Ready' },
];

export const INITIAL_COURSES: Course[] = [
    {
        id: '1',
        title: 'Professional Makeup Artistry',
        price: '₹50,000',
        duration: '4 Weeks',
        description: 'Comprehensive course for aspiring makeup artists. Learn everything from basics to advanced techniques.',
        curriculum: ['Color Theory & Skin Prep', 'Bridal & Party Makeup', 'Contouring & Highlighting', 'Business of Makeup'],
        imageUrl: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80'
    },
    {
        id: '2',
        title: 'Self-Grooming Workshop',
        price: '₹5,000',
        duration: '2 Days',
        description: 'Learn how to do your own makeup like a pro suitable for daily wear and events.',
        curriculum: ['Day vs Night Looks', 'Foundation Matching', 'Basic Eye Makeup', 'Product Recommendations'],
        imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80'
    },
    {
        id: '3',
        title: 'Advanced Hairstyling',
        price: '₹20,000',
        duration: '2 Weeks',
        description: 'Master the art of bridal and fashion hairstyling.',
        curriculum: ['Blow Drying Techniques', 'Traditional Bridal Buns', 'Messy Braids & Texturing', 'Accessory Placement'],
        imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80'
    }
];
