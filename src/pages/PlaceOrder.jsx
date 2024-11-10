import { useContext, useState } from "react";
import { assets } from "../assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { LanguageContext } from "../context/LanguageContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);
  const { language } = useContext(LanguageContext);

  const translations = {
    en: {
      delivery: "DELIVERY",
      information: "INFORMATION",
      payment: "PAYMENT",
      method: "METHOD",
      cashOnDelivery: "CASH ON DELIVERY",
      placeOrder: "PLACE ORDER",
      firstName: "First name",
      lastName: "Last name",
      emailAddress: "Email address",
      street: "Street",
      city: "City",
      state: "State",
      zipcode: "Zipcode",
      country: "Country",
      phone: "Phone",
    },
    pt: {
      delivery: "ENTREGA",
      information: "INFORMAÇÃO",
      payment: "PAGAMENTO",
      method: "MÉTODO",
      cashOnDelivery: "PAGAMENTO NA ENTREGA",
      placeOrder: "FAZER PEDIDO",
      firstName: "Nome",
      lastName: "Sobrenome",
      emailAddress: "Endereço de e-mail",
      street: "Rua",
      city: "Cidade",
      state: "Estado",
      zipcode: "CEP",
      country: "País",
      phone: "Telefone",
    },
  };

  const stripeLogo = language === "pt" ? assets.pix : assets.stripe_logo;
  const razorpayLogo = language === "pt" ? assets.picpay : assets.razorpay_logo;

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* ---------- Left Side ---------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title
            text1={translations[language].delivery}
            text2={translations[language].information}
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder={translations[language].firstName}
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder={translations[language].lastName}
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder={translations[language].emailAddress}
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder={translations[language].street}
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder={translations[language].city}
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder={translations[language].state}
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder={translations[language].zipcode}
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder={translations[language].country}
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder={translations[language].phone}
        />
      </div>

      {/* --------- Right Side --------- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title
            text1={translations[language].payment}
            text2={translations[language].method}
          />
          {/* -------------- Payment Method Selection -------------- */}
          <div
            onClick={() => setMethod("stripe")}
            className="flex gap-3 flex-col lg:flex-row"
          >
            <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={stripeLogo} alt="Stripe Logo" />
            </div>
          </div>
          <div
            onClick={() => setMethod("razorpay")}
            className="flex gap-3 flex-col lg:flex-row"
          >
            <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img
                className="h-5 mx-4"
                src={razorpayLogo}
                alt="Razorpay Logo"
              />
            </div>
          </div>
          <div
            onClick={() => setMethod("cod")}
            className="flex gap-3 flex-col lg:flex-row"
          >
            <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                {translations[language].cashOnDelivery}
              </p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button
              onClick={() => navigate("/orders")}
              className="bg-black text-white px-16 py-3 text-sm"
            >
              {translations[language].placeOrder}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
