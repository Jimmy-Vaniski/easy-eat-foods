import { useContext } from "react";
import { CartContext } from "../_context/cart";
import CartItem from "./cart-item";
import { Card, CardContent } from "./ui/card";

const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    <div className="py-5">
      <div className="space-y-4">
        {products.map((product) => (
          <CartItem key={product.id} cartProduct={product} />
        ))}
      </div>
      <div className="mt-6">
        <Card>
          <CardContent>
            {/* preciso do total de cada produto
            preciso do total de todos os produtos 
            preciso do desconto total.
            */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
