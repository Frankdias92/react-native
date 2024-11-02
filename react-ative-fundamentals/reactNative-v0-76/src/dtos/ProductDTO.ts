import { ImageSourcePropType } from "react-native";

export type ProductDTO = {
  id: number;
  name: string;
  price: number;
  condition: string;
  payment_methods: string[];
  description: string;
  accepts_exchange: boolean;
  image: ImageSourcePropType;
}

export type ProductListDTO = {
  id: number;
  name: string;
  price: number;
  image: ImageSourcePropType;
}

export type FilterProductDTO = {
  id: number;
  condition: ['NEW', 'OLD'];
  conditionIsSelected: boolean;
  payment_methods: ['Pix', 'Card Credit', 'Boleto'];
  description: string;
  accepts_exchange: boolean;
}