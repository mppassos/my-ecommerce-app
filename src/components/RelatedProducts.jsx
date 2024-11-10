import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    related: "RELATED",
    products: "PRODUCTS",
    noRelatedProducts: "No related products found.",
  },
  pt: {
    related: "RELACIONADOS",
    products: "PRODUTOS",
    noRelatedProducts: "Nenhum produto relacionado encontrado.",
  },
};

// eslint-disable-next-line react/prop-types
const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  const { language } = useLanguage();

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();

      productCopy = productCopy.filter((item) => category === item.category);
      productCopy = productCopy.filter(
        (item) => subCategory === item.subCategory
      );

      setRelated(productCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title
          text1={translations[language].related}
          text2={translations[language].products}
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.length > 0 ? (
          related.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p>{translations[language].noRelatedProducts}</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
