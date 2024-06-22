import { Product } from "@/interface/product-interface";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <section className="w-3/4 p-3 h-full overflow-hidden">
      <div className="overflow-y-auto h-full rounded-lg border scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500">
        <table className="w-full table-auto border-collapse">
          <thead className="sticky top-0 bg-white z-10">
            <tr>
              <th className="border px-4 py-2 text-black rounded-tl-lg">ID Producto</th>
              <th className="border px-4 py-2 text-black">Nombre Producto</th>
              <th className="border px-4 py-2 text-black">Precio</th>
              <th className="border px-4 py-2 text-black">Mercado Enlace</th>
              <th className="border px-4 py-2 text-black rounded-tr-lg">Imagen</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.id}</td>
                <td className="border px-4 py-2">{product.title}</td>
                <td className="border px-4 py-2">${product.price}</td>
                <td className="border px-4 py-2">
                  <a href={product.permalink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    Ver en MercadoLibre
                  </a>
                </td>
                <td className="border px-4 py-2">
                  <img src={product.thumbnail} alt={product.title} className="w-24 h-24 object-cover" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductList;
