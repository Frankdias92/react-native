export type ProductDTO = {
  id: number;
  name: string;
  price: number;
  condition: string;
  payment_methods: string[];
  description: string;
  accepts_exchange: boolean;
  image: string;
}

export type ProductListDTO = {
  id: number;
  name: string;
  price: number;
  image: string;
}