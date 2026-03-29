export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  price: number;
  image: string;
  tags: string[];
  maintenance: string;
  viewingPeriod: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface LeaseItem {
  plant: Plant;
  duration: number;
  startDate: string;
}
