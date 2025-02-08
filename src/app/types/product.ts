export interface Product {
    
    _id: string;
    productname: string;
    title: string;
    _type: "product";
    image?: {
      asset: {
        _ref: string;
        _type: "image";
      };
    };
    price: number;
    description?: string;
    slug: {
      _type: "slug";
      current: string;
    }
    inventory: number;
  };