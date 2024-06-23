"use client"
import { useState, useEffect } from "react";
import axios from "axios";

import { Product } from "@/interface/product-interface";
import Header from "@/components/Header";
import Aside from "@/components/Aside";
import ProductList from "@/components/ProductList";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = category 
          ? `https://api.mercadolibre.com/sites/MLA/search?category=${category}&seller_id=179571326`
          : 'https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326';
        const response = await axios.get(url);
        setProducts(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <main className="flex h-screen w-full flex-col items-center">
      <Header />
      <section className="w-full flex flex-grow p-3 h-full">
        <Aside onSelectCategory={setCategory} />
        <ProductList products={products} />
      </section>
    </main>
  );
}

