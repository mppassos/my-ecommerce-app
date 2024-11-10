import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    contact: "CONTACT",
    us: "US",
    ourStore: "Our Store",
    address: "54709 Willms Station <br /> Suite 350, Washington, USA",
    tel: "Tel: (415) 555-0132 <br /> Email: admin@foverer.com",
    careers: "Careers at Forever",
    learnMore: "Learn more about our teams and job openings.",
    exploreJobs: "Explore Jobs",
  },
  pt: {
    contact: "CONTATO",
    us: "NOS",
    ourStore: "Nossa Loja",
    address: "54709 Willms Station <br /> Suite 350, Washington, EUA",
    tel: "Tel: (415) 555-0132 <br /> Email: admin@foverer.com",
    careers: "Carreiras na Forever",
    learnMore: "Saiba mais sobre nossas equipes e vagas de emprego.",
    exploreJobs: "Explorar Vagas",
  },
};

const Contact = () => {
  const { language } = useLanguage();

  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title
          text1={translations[language].contact}
          text2={translations[language].us}
        />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-8-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">
            {translations[language].ourStore}
          </p>
          <p
            className="text-gray-500"
            dangerouslySetInnerHTML={{ __html: translations[language].address }}
          />
          <p
            className="text-gray-500"
            dangerouslySetInnerHTML={{ __html: translations[language].tel }}
          />
          <p className="font-semibold text-xl text-gray-600">
            {translations[language].careers}
          </p>
          <p className="text-gray-500">{translations[language].learnMore}</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            {translations[language].exploreJobs}
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
