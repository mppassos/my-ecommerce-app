import { assets } from "../assets/assets";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  // Objeto de traduções
  const translations = {
    en: {
      company: "COMPANY",
      home: "Home",
      aboutUs: "About us",
      delivery: "Delivery",
      privacyPolicy: "Privacy policy",
      getInTouch: "GET IN TOUCH",
      phone: "+1-212-456-7890",
      email: "contact@foreveryou.com",
      copyright: "Copyright 2024© forever.com - All Right Reserved.",
    },
    pt: {
      company: "EMPRESA",
      home: "Início",
      aboutUs: "Sobre nós",
      delivery: "Entrega",
      privacyPolicy: "Política de Privacidade",
      getInTouch: "ENTRE EM CONTATO",
      phone: "+55-21-4567-8900",
      email: "contato@foreveryou.com",
      copyright: "Copyright 2024© forever.com - Todos os Direitos Reservados.",
    },
  };

  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-4 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vel
            natus ratione enim a sequi, eligendi incidunt? Aut ab, impedit
            quisquam magnam quos quo. Aperiam dolor assumenda dolorum inventore
            aliquid.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">
            {translations[language].company}
          </p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>{translations[language].home}</li>
            <li>{translations[language].aboutUs}</li>
            <li>{translations[language].delivery}</li>
            <li>{translations[language].privacyPolicy}</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">
            {translations[language].getInTouch}
          </p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>{translations[language].phone}</li>
            <li>{translations[language].email}</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          {translations[language].copyright}
        </p>
      </div>
    </div>
  );
};

export default Footer;
