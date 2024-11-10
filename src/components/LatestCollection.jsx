import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { useLanguage } from "../context/LanguageContext";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const { language } = useLanguage();

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  const translations = {
    en: {
      latest: "LATEST",
      collections: "COLLECTIONS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates omnis, neque quam vero modi sit doloremque autem tempora facilis nisi quaerat voluptatum voluptatem beatae ipsa ducimus consectetur odit, sint numquam!",
    },
    pt: {
      latest: "ÚLTIMAS",
      collections: "COLEÇÕES",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates omnis, neque quam vero modi sit doloremque autem tempora facilis nisi quaerat voluptatum voluptatem beatae ipsa ducimus consectetur odit, sint numquam!", // Você pode substituir por uma tradução real
    },
  };

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title
          text1={translations[language].latest}
          text2={translations[language].collections}
        />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          {translations[language].description}
        </p>
      </div>

      {/* Rending Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
