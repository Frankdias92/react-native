import { ImageSourcePropType } from "react-native";

export type ProductDTO = {
  userId: number;
  products: {
    id: number;
    name: string;
    price: number;
    condition: string;
    payment_methods: string[];
    description: string;
    accepts_exchange: boolean;
    image: ImageSourcePropType;
  }[]
}

export type ProductListDTO = {
  userId: number,
  products: {
    id: number;
    name: string;
    price: number;
    image: ImageSourcePropType;
  }[]
}

export type FilterProductDTO = {
  id: number;
  condition: ['NEW', 'OLD'];
  conditionIsSelected: boolean;
  payment_methods: ['Pix', 'Card Credit', 'Boleto'];
  description: string;
  accepts_exchange: boolean;
}

export type Product = {
  id: number;
  name: string;
  price: number;
  condition: string;
  payment_methods: string[];
  description: string;
  accepts_exchange: boolean;
  image: ImageSourcePropType; // ou use `string | StaticImageData` se estiver usando Next.js
};

type User = {
  id: number;
  name: string;
  products: Product[];
};

export type ProductTest = {
  users: User[];
};