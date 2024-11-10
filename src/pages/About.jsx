import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";
import { assets } from "../assets/assets";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { language } = useLanguage(); // Obtenha o contexto de idioma

  const translations = {
    en: {
      title1: "ABOUT",
      title2: "US",
      mission: "Our Mission",
      whyChoose: "WHY",
      chooseUs: "CHOOSE US",
      qualityAssurance: "Quality Assurance:",
      qualityDescription:
        "We meticulously select and vet each product to ensure it meets our stringent quality standards.",
      convenience: "Convenience:",
      convenienceDescription:
        "With our user-friendly interface and hassle-free ordering process, shopping has never been easier.",
      exceptionalService: "Exceptional Customer Service:",
      serviceDescription:
        "Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.",
    },
    pt: {
      title1: "SOBRE",
      title2: "NÓS",
      mission: "Nossa Missão",
      whyChoose: "POR QUE",
      chooseUs: "ESCOLHER-NOS",
      qualityAssurance: "Garantia de Qualidade:",
      qualityDescription:
        "Selecionamos e avaliamos meticulosamente cada produto para garantir que atenda aos nossos rigorosos padrões de qualidade.",
      convenience: "Conveniência:",
      convenienceDescription:
        "Com nossa interface amigável e processo de pedido sem complicações, fazer compras nunca foi tão fácil.",
      exceptionalService: "Atendimento ao Cliente Excepcional:",
      serviceDescription:
        "Nossa equipe de profissionais dedicados está aqui para ajudá-lo, garantindo que sua satisfação seja nossa prioridade.",
    },
  };

  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title
          text1={translations[language].title1}
          text2={translations[language].title2}
        />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we&apos;ve worked tirelessly to curate a
            diverse selection of high-quality products that cater to every taste
            and preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <b className="text-gray-800">{translations[language].mission}</b>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We&apos;re dedicated to providing a
            seamless shopping experience that exceeds expectations, from
            browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title
          text1={translations[language].whyChoose}
          text2={translations[language].chooseUs}
        />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>{translations[language].qualityAssurance}</b>
          <p className="text-gray-600">
            {translations[language].qualityDescription}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>{translations[language].convenience}</b>
          <p className="text-gray-600">
            {translations[language].convenienceDescription}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>{translations[language].exceptionalService}</b>
          <p className="text-gray-600">
            {translations[language].serviceDescription}
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
