interface AsideProps {
  onSelectCategory: (categoryId: string) => void;
}

const Aside: React.FC<AsideProps> = ({ onSelectCategory }) => {
  const handleCategoryClick = (categoryId: string) => {
    onSelectCategory(categoryId);
  };

  return (
    <aside className="w-1/4 border-r border-gray-300 p-3">
      <h2 className="text-left">Menu</h2>
      <ul className="flex flex-col">
        <li>
          <a href="#" onClick={() => handleCategoryClick('MLA1648')}>Computacion</a>
        </li>
        <li>
          <a href="#" onClick={() => handleCategoryClick('MLA1051')}>Celulares y telefonos</a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;


  