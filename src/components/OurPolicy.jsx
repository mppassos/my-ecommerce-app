import { assets } from "../assets";
import { useLanguage } from "../context/LanguageContext";

const OurPolicy = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      easyExchange: "Easy Exchange Policy",
      easyExchangeDescription: "We offer hassle-free exchange policy",
      returnPolicy: "7 Days Return Policy",
      returnPolicyDescription: "We provide 7 days free return policy",
      customerSupport: "Best customer support",
      customerSupportDescription: "We provide 24/7 customer support",
    },
    pt: {
      easyExchange: "Política de Troca Fácil",
      easyExchangeDescription:
        "Oferecemos uma política de troca sem complicações",
      returnPolicy: "Política de Devolução de 7 Dias",
      returnPolicyDescription:
        "Oferecemos uma política de devolução gratuita de 7 dias",
      customerSupport: "Melhor suporte ao cliente",
      customerSupportDescription: "Oferecemos suporte ao cliente 24/7",
    },
  };

  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">{translations[language].easyExchange}</p>
        <p className="text-gray-400">
          {translations[language].easyExchangeDescription}
        </p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">{translations[language].returnPolicy}</p>
        <p className="text-gray-400">
          {translations[language].returnPolicyDescription}
        </p>
      </div>
      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">
          {translations[language].customerSupport}
        </p>
        <p className="text-gray-400">
          {translations[language].customerSupportDescription}
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
