export interface Product {
    id: string;
    name: string;
    tagline: string;
    category: string;
    thumbnail: string;
    images: string[];
    price: string;
    target: string;
    features: string[];
    problemsSolved: string[];
    techStack: string[];
    url?: string; // ← これを追加（?は「無くてもOK」の意味）
}