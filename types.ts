
export interface Performer {
  name: string;
  date: string;
  imageUrl: string;
}

export interface Sponsor {
  name: string;
  logoUrl: string;
}

export interface PointOfSale {
  name: string;
  address?: string;
  logoUrl?: string;
}

export interface TouristAttraction {
  id: string;
  name: string;
  description: string;
  fullDescription: string[];
  address: string;
  imageUrl: string;
  category: 'Religioso' | 'Histórico' | 'Natural' | 'Cultural';
  openingHours?: string;
  phone?: string;
  website?: string;
}

export interface Accommodation {
  id: string;
  name: string;
  type: 'Hotel' | 'Pousada' | 'Resort';
  description: string;
  address: string;
  phone: string;
  email?: string;
  website?: string;
  imageUrl: string;
  amenities: string[];
  priceRange: 'Econômico' | 'Médio' | 'Alto';
}
