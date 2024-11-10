import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { LanguageContext } from "../context/LanguageContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const translations = {
  en: {
    selectSize: "Select Size",
    addToCart: "ADD TO CART",
    originalProduct: "100% Original product.",
    cashOnDelivery: "Cash on delivery is available on this product.",
    returnPolicy: "Easy return and exchange policy within 7 days.",
    description: "Description",
    reviews: "Reviews (122)",
    eCommerceDescription:
      "An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where business and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.",
    eCommerceDetails:
      "E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.",
  },
  pt: {
    selectSize: "Selecionar Tamanho",
    addToCart: "ADICIONAR AO CARRINHO",
    originalProduct: "Produto 100% Original.",
    cashOnDelivery: "Pagamento na entrega disponível para este produto.",
    returnPolicy: "Política de devolução e troca fácil dentro de 7 dias.",
    description: "Descrição",
    reviews: "Avaliações (122)",
    eCommerceDescription:
      "Um site de e-commerce é uma plataforma online que facilita a compra e venda de produtos ou serviços pela internet. Ele serve como um mercado virtual onde empresas e indivíduos podem exibir seus produtos, interagir com os clientes e realizar transações sem a necessidade de uma presença física. Os sites de e-commerce ganharam imensa popularidade devido à sua conveniência, acessibilidade e ao alcance global que oferecem.",
    eCommerceDetails:
      "Os sites de e-commerce normalmente exibem produtos ou serviços junto com descrições detalhadas, imagens, preços e quaisquer variações disponíveis (por exemplo, tamanhos, cores). Cada produto geralmente tem sua própria página dedicada com informações relevantes.",
  },
};

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const { language } = useContext(LanguageContext); // Usando o contexto de idioma
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    products.forEach((item) => {
      if (item._id === productId) {
        setProductData(item);
        if (item.image.length > 0) {
          setImage(item.image[0]);
        }
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* --------- Product Data --------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* --------- Product Images --------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* --------- Product Info --------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>{translations[language].selectSize}</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            {translations[language].addToCart}
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>{translations[language].originalProduct}</p>
            <p>{translations[language].cashOnDelivery}</p>
            <p>{translations[language].returnPolicy}</p>
          </div>
        </div>
      </div>

      {/* --------- Description & Review Section --------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">
            {translations[language].description}
          </b>
          <p className="border px-5 py-3 text-sm">
            {translations[language].reviews}
          </p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>{translations[language].eCommerceDescription}</p>
          <p>{translations[language].eCommerceDetails}</p>
        </div>
      </div>

      {/* --------- Display related products --------- */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0">Loading...</div>
  );
};

export default Product;
