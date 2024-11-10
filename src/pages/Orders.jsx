import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    my: "MY",
    orders: "ORDERS",
    quantity: "Quantity: ",
    size: "Size: ",
    date: "Date: ",
    readyToShip: "Ready to ship",
    trackOrder: "Track Order",
  },
  pt: {
    my: "MINHAS",
    orders: "PEDIDOS",
    quantity: "Quantidade: ",
    size: "Tamanho: ",
    date: "Data: ",
    readyToShip: "Pronto para enviar",
    trackOrder: "Rastrear Pedido",
  },
};

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  const { language } = useLanguage();

  const getCurrentDate = () => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date().toLocaleDateString(
      language === "pt" ? "pt-BR" : "en-US",
      options
    );
  };

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title
          text1={translations[language].my}
          text2={translations[language].orders}
        />
      </div>

      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>{translations[language].quantity}1</p>
                  <p>{translations[language].size} M</p>
                </div>
                <p className="mt-2">
                  {translations[language].date}{" "}
                  <span className="text-gray-400">{getCurrentDate()}</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">
                  {translations[language].readyToShip}
                </p>
              </div>
              <button className="border px-4 py-2 text-sm font-medium rounded-sm">
                {translations[language].trackOrder}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
