import { useLanguage } from "../context/LanguageContext";

const NewsletterBox = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      subscribeMessage: "Subscribe now & get 20% off",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      placeholder: "Enter your email",
      subscribe: "SUBSCRIBE",
    },
    pt: {
      subscribeMessage: "Inscreva-se agora e ganhe 20% de desconto",
      description:
        "Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e tipografia.",
      placeholder: "Digite seu email",
      subscribe: "INSCREVER",
    },
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        {translations[language].subscribeMessage}
      </p>
      <p className="text-gray-400 mt-3">{translations[language].description}</p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder={translations[language].placeholder}
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          {translations[language].subscribe}
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
