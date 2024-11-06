import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { cart, addToCart } = useContext();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Produtos</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>${product.price}</p>
            </Link>
            <button onClick={() => addToCart(product)}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
      <Link to="/checkout">Checkout</Link>
    </div>
  );
};

export default Products;
