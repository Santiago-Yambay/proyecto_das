import {CategoryType} from './category.model';

export interface Aggregate {
  description: string;
  apps: string[];
}

export interface Product {
  id: number;
  categoryId: CategoryType;
  name: string;
  description: string;
  price: number;
  validityDays: number;
  dataCapacity: number;
  calls: string[];
  aggregates: Aggregate[];
  img: string;
}

export interface ProductFiltersDto {
  categoryId?: CategoryType;
}