import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { useLanguage } from "../context/LanguageContext";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  const { language } = useLanguage();

  const translations = {
    en: {
      cart: "CART",
      totals: "TOTALS",
      subtotal: "Subtotal",
      shippingFee: "Shipping Fee",
      total: "Total",
    },
    pt: {
      cart: "CARRINHO",
      totals: "TOTAIS",
      subtotal: "Subtotal",
      shippingFee: "Taxa de Entrega",
      total: "Total",
    },
  };

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title
          text1={translations[language].cart}
          text2={translations[language].totals}
        />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>{translations[language].subtotal}</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>{translations[language].shippingFee}</p>
          <p>
            {currency} {delivery_fee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>{translations[language].total}</b>
          <b>
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
