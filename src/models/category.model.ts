export enum CategoryType {
  Paquete = 1,
  Plan = 2,
  Recarga = 3
}

export enum ServiceType {
  Fixed = 1,
  Mobile = 2
}

export interface Category {
  id: CategoryType;
  telephonyId: number;
  serviceType: ServiceType;
  name: string;
  description: string;
  icon: string;
  img: string;
}
