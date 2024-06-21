"use client";
import { useState, useEffect } from "react";
import axios from "axios";

import { Product } from "@/interface/product-interface";
import Header from "@/components/Header";
import Aside from "@/components/Aside";
import ProductList from "@/components/ProductList";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    try {
      axios.get('https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326')
        .then(response => {
          setProducts(response.data.results);
        })
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <main className="flex h-screen w-full flex-col items-center">
      <Header />
      <section className="w-full flex flex-grow p-3 h-full">
        <Aside />
        <ProductList products={products} />
      </section>
    </main>
  );
}


