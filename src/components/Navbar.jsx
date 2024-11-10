import { assets } from "../assets";
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const { language, toggleLanguage } = useLanguage(); // Obtém o idioma atual e a função para alternar

  // Traduções
  const translations = {
    en: {
      home: "HOME",
      collection: "COLLECTION",
      about: "ABOUT",
      contact: "CONTACT",
      myProfile: "My Profile",
      orders: "Orders",
      logout: "Logout",
      back: "Back",
      switchToPT: "Switch to Portuguese",
      switchToEN: "Switch to English",
    },
    pt: {
      home: "INÍCIO",
      collection: "COLEÇÃO",
      about: "SOBRE",
      contact: "CONTATO",
      myProfile: "Meu Perfil",
      orders: "Pedidos",
      logout: "Sair",
      back: "Voltar",
      switchToPT: "Mudar para Português",
      switchToEN: "Mudar para Inglês",
    },
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>{translations[language].home}</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>{translations[language].collection}</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>{translations[language].about}</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>{translations[language].contact}</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt=""
        />

        <div className="group relative">
          <Link to="/login">
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt=""
            />
          </Link>
          <div className="absolute right-0 pt-4 hidden group-hover:block">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">
                {translations[language].myProfile}
              </p>
              <p className="cursor-pointer hover:text-black">
                {translations[language].orders}
              </p>
              <p className="cursor-pointer hover:text-black">
                {translations[language].logout}
              </p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />

        {/* Botão para alternar o idioma */}
        <button
          onClick={toggleLanguage}
          className="text-sm text-gray-600 hover:text-black"
        >
          {language === "en"
            ? translations.pt.switchToPT
            : translations.en.switchToEN}
        </button>
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>{translations[language].back}</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            {translations[language].home}
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            {translations[language].collection}
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            {translations[language].about}
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            {translations[language].contact}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
