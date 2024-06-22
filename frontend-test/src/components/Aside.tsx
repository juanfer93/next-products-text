import Link from "next/link";

const Aside = () => {
    return (
      <aside className="w-1/4 border-r border-gray-300 p-3">
        <h2 className="text-left">Menu</h2>
        <ul className="flex flex-col">
          <Link href="">Computacion</Link>
          <Link href="">Celulares y telefonos</Link>
        </ul>
      </aside>
    );
};
  
export default Aside;
  