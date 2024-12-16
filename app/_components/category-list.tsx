import { db } from "../_lib/prisma";
import CategoryItem from "./category-item";

const CategoryList = async () => {
  const categories = await db.category.findMany({});

  // encontrar categorias em banco de dados
  // Renderizar um item para cada categoria encontrada no banco
  return (
    <div className="whidth-auto flex gap-3 overflow-x-scroll pb-1 pt-3 [&::-webkit-scrollbar]:hidden">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
