import { ProductDTO } from "../dtos/ProductDTO";

export const productsData: ProductDTO[] = [
  {
    "id": 1,
    "name": "Road Bike",
    "price": 1200.00,
    "condition": "used",
    "payment_methods": ["Pix", "Cash", "Card Credit"],
    "description": "Road bike in excellent condition, perfect for those looking for performance on long distances.",
    "accepts_exchange": true,
    "image": require("@/assets/productImages/roadBike.png")
  },
  {
    "id": 2,
    "name": "Gaming Laptop",
    "price": 5000.00,
    "condition": "new",
    "payment_methods": ["Pix", "Cash", 'Card Credit'],
    "description": "Gaming laptop with Intel i7 processor, 16GB RAM, and GTX 1660Ti graphics card.",
    "accepts_exchange": false,
    "image": require("@/assets/productImages/gaming-laptop.png")
  },
  {
    "id": 3,
    "name": "Android Smartphone",
    "price": 1500.00,
    "condition": "used",
    "payment_methods": ["Pix", "Cash", "Card Credit"],
    "description": "Android smartphone in great condition, with high-resolution camera and 128GB storage.",
    "accepts_exchange": true,
    "image": require("@/assets/productImages/android-smartphone.png")
  },
  {
    "id": 4,
    "name": "4K Television",
    "price": 2800.00,
    "condition": "new",
    "payment_methods": ["Pix", "Card Credit"],
    "description": "55-inch 4K smart TV with high-definition image and sound.",
    "accepts_exchange": false,
    "image": require("@/assets/productImages/4k-tv.png")
  },
  {
    "id": 5,
    "name": "Office Desk",
    "price": 300.00,
    "condition": "used",
    "payment_methods": ["Cash", "Pix"],
    "description": "Used office desk with some signs of wear, ideal for a home office setup.",
    "accepts_exchange": false,
    "image": require("@/assets/productImages/office-desk.png")
  },
  {
    "id": 6,
    "name": "Bluetooth Headphones",
    "price": 200.00,
    "condition": "new",
    "payment_methods": ["Pix", "Cash", "Card Credit"],
    "description": "Wireless headphones with noise cancellation and excellent sound quality.",
    "accepts_exchange": true,
    "image": require("@/assets/productImages/bluetooth-headphones.png")
  },
  {
    "id": 7,
    "name": "DSLR Camera",
    "price": 3500.00,
    "condition": "used",
    "payment_methods": ["Pix", "Card Credit"],
    "description": "Semi-professional DSLR camera with an 18-55mm lens, great for beginners in photography.",
    "accepts_exchange": false,
    "image": require("@/assets/productImages/dslr-camera.png")
  },
  {
    "id": 8,
    "name": "Game Console",
    "price": 2500.00,
    "condition": "new",
    "payment_methods": ["Cash", "Pix", "Card Credit"],
    "description": "Latest generation console with exclusive games and high performance.",
    "accepts_exchange": true,
    "image": require("@/assets/productImages/game-console.png")
  },
  {
    "id": 9,
    "name": "Gaming Chair",
    "price": 600.00,
    "condition": "used",
    "payment_methods": ["Cash", "Card Credit"],
    "description": "Ergonomic gaming chair, perfect for long hours of gaming and work.",
    "accepts_exchange": false,
    "image": require("@/assets/productImages/gaming-chair.png")
  },
  {
    "id": 10,
    "name": "Microwave",
    "price": 400.00,
    "condition": "used",
    "payment_methods": ["Cash", "Pix"],
    "description": "Microwave in great condition, with heating and defrosting functions.",
    "accepts_exchange": true,
    "image": require("@/assets/productImages/microwave.png")
  }
]
