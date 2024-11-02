export type ProductDTO = {
  id: number;
  name: string;
  price: number;
  condition: string;
  payment_methods: 'Pix' | 'Cash' | 'Card Credit';
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

export type FilterProductDTO = {
  id: number;
  condition: ['NEW', 'OLD'];
  conditionIsSelected: boolean;
  payment_methods: ['Pix', 'Card Credit', 'Boleto'];
  description: string;
  accepts_exchange: boolean;
}