import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import ProductImage from "./_components/product-image";
import ProductDetails from "./_components/product-details";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = params; // Extraindo `id` de forma assíncrona

  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      restaurant: true,
    },
  });

  if (!product) {
    return notFound();
  }

  const juices = await db.product.findMany({
    where: {
      category: {
        name: "Sucos",
      },
      restaurant: {
        id: product?.restaurantId,
      },
    },
    include: {
      restaurant: true,
    },
    take: 10,
  });

  return (
    <div>
      {/* Imagem do produto */}
      <ProductImage product={product} />

      {/* Div pai das informações do produto */}
      <ProductDetails product={product} recomendedDrinks={juices} />
    </div>
  );
};

export default ProductPage;
