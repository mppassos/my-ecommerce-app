import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    signUp: "Sign Up",
    login: "Login",
    name: "Name",
    email: "Email",
    password: "Password",
    forgotPassword: "Forgot your password?",
    createAccount: "Create account",
    loginHere: "Login Here",
    signIn: "Sign In",
    signUpButton: "Sign Up",
    errorMessage:
      "Please enter a valid email and a password with at least 8 characters.",
  },
  pt: {
    signUp: "Cadastrar",
    login: "Entrar",
    name: "Nome",
    email: "Email",
    password: "Senha",
    forgotPassword: "Esqueceu sua senha?",
    createAccount: "Criar conta",
    loginHere: "Entrar aqui",
    signIn: "Entrar",
    signUpButton: "Cadastrar",
    errorMessage:
      "Por favor, insira um email válido e uma senha com pelo menos 8 caracteres.",
  },
};

const Login = () => {
  const { language } = useLanguage();
  const [currentState, setCurrentState] = useState(
    translations[language].signUp
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isValidPassword = (password) => password.length >= 8;

  const onSubmitHandle = async (event) => {
    event.preventDefault();
    if (isValidEmail(email) && isValidPassword(password)) {
      navigate("/");
    } else {
      toast.error(translations[language].errorMessage);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandle}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === translations[language].login ? null : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder={translations[language].name}
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder={translations[language].email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder={translations[language].password}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">
          {translations[language].forgotPassword}
        </p>
        {currentState === translations[language].login ? (
          <p
            onClick={() => setCurrentState(translations[language].signUp)}
            className="cursor-pointer"
          >
            {translations[language].createAccount}
          </p>
        ) : (
          <p
            onClick={() => setCurrentState(translations[language].login)}
            className="cursor-pointer"
          >
            {translations[language].loginHere}
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 mt-4">
        {currentState === translations[language].login
          ? translations[language].signIn
          : translations[language].signUpButton}
      </button>
    </form>
  );
};

export default Login;
