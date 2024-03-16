export interface IProduct {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: IRating;
    quantity?: number;
    subTotal?:number;

  }

  export interface ShoppingCart {
    items: IProduct[];
    totalAmount: number;
  }
  
  interface IRating {
    rate: number;
    count: number;
  }