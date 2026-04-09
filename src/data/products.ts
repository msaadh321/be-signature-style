import productTee from "@/assets/product-tee.jpg";
import productHoodie from "@/assets/product-hoodie.jpg";
import productCap from "@/assets/product-cap.jpg";
import productTote from "@/assets/product-tote.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  category: string;
  images: string[];
  description: string;
  sizes: string[];
  details: string[];
}

export const products: Product[] = [
  {
    id: "essential-oversized-tee",
    name: "Essential Oversized Tee",
    price: 65,
    priceLabel: "$65",
    category: "T-Shirts",
    images: [productTee, productTee, productTee],
    description:
      "Cut from heavyweight 280gsm cotton with a relaxed, oversized silhouette. Features the embroidered BE monogram at the chest and a subtle woven label at the hem. Designed for effortless layering.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    details: [
      "280gsm premium cotton",
      "Oversized drop-shoulder fit",
      "Embroidered BE monogram",
      "Woven label at hem",
      "Pre-shrunk & garment-dyed",
    ],
  },
  {
    id: "signature-hoodie",
    name: "Signature Hoodie",
    price: 120,
    priceLabel: "$120",
    category: "Hoodies",
    images: [productHoodie, productHoodie, productHoodie],
    description:
      "The cornerstone of the BE collection. A 400gsm French terry hoodie with kangaroo pocket, ribbed cuffs, and tonal BE embroidery. Heavy, warm, and built to last.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      "400gsm French terry",
      "Oversized relaxed fit",
      "Tonal BE chest embroidery",
      "Metal-tipped drawcords",
      "Kangaroo pocket",
    ],
  },
  {
    id: "be-classic-cap",
    name: "BE Classic Cap",
    price: 45,
    priceLabel: "$45",
    category: "Accessories",
    images: [productCap, productCap, productCap],
    description:
      "Unstructured six-panel cap with curved brim. Debossed BE logo on the front and adjustable strap closure. One size fits all.",
    sizes: ["One Size"],
    details: [
      "100% cotton twill",
      "Unstructured six-panel",
      "Debossed BE logo",
      "Adjustable metal buckle",
      "Pre-curved brim",
    ],
  },
  {
    id: "canvas-tote",
    name: "Canvas Tote",
    price: 55,
    priceLabel: "$55",
    category: "Accessories",
    images: [productTote, productTote, productTote],
    description:
      "Heavy-duty canvas tote with reinforced handles and inner pocket. Screen-printed BE wordmark. Spacious enough for daily carry.",
    sizes: ["One Size"],
    details: [
      "16oz heavy canvas",
      "Reinforced cotton handles",
      "Interior slip pocket",
      "Screen-printed BE logo",
      "Dimensions: 40×36×12cm",
    ],
  },
];

export const getProductById = (id: string) => products.find((p) => p.id === id);
