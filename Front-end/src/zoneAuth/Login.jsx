import { Eye, EyeClosed, Lock } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FaBus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, setUser } from "../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [errorsBackend, setErrorsBackend] = useState([]);

  const [animateBus, setAnimateBus] = useState(false); // state for bus animation
  const [animateLock, setAnimateLock] = useState(false); // state for lock animation

  useEffect(() => {
    // Start the bus animation immediately
    setAnimateBus(true);

    // After a delay, start the lock animation
    const lockTimer = setTimeout(() => {
      setAnimateLock(true);
    }, 1000); // Delay of 1 second

    // Clear the timer if the component unmounts
    return () => clearTimeout(lockTimer);
  }, []);

  const validate = (data) => {
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const newErrors = {};

    if (!data.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!re.test(data.password)) {
      newErrors.password =
        "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:";
    }

    return newErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(login(data))
        .then((res) => {
          console.log(res);
          if (res.payload && res.payload.user && res.payload.token) {
            const { user, token } = res.payload;
            const dataUser = { user, token };
            console.log(dataUser);
            dispatch(setUser(dataUser));
            navigate("/");
          } else {
            const { errors } = res.payload;
            setErrorsBackend(errors);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <section className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="p-10 rounded-lg shadow-xl bg-white max-w-lg w-full">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3">
            {/* Animation de l'icône "Bus" */}
            <FaBus
              className={`text-blue-600 ${animateBus ? "animate-bounce" : ""}`}
              size={50}
            />
            {/* Animation de l'icône "Lock" */}
            <Lock
              className={`text-blue-600 ${animateLock ? "animate-bounce" : ""}`}
              size={50}
            />
          </div>
          <h1 className="text-xl font-semibold text-center text-gray-800 mt-4">
            <p className="text-gray-500 mt-2">"Le voyage commence ici !!!"</p>
            <p className="text-gray-500 mt-2">
              "Reprenez là où vous vous êtes arrêté !!!"
            </p>
          </h1>
          <div id="backend" className="my-2">
            {errorsBackend &&
              errorsBackend.map((v, index) => (
                <span key={index} className="block text-red-600 text-xs">
                  {v.path} : {v.msg}
                </span>
              ))}
          </div>
        </div>

        <form onSubmit={handleLogin} className="mt-6 space-y-5">
          {/* Champ Email */}
          <div className="relative group">
            <label
              htmlFor="email"
              className="absolute text-gray-500 text-base left-2 top-2 transition-all group-focus-within:top-[-10px] group-focus-within:text-blue-500"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Votre email"
              className={`w-full border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md p-3 mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 transform group-focus-within:scale-105`}
              aria-label="Email"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email}</span>
            )}
          </div>

          {/* Champ Mot de Passe */}
          <div className="relative group">
            <label
              htmlFor="password"
              className="absolute text-gray-500 text-base left-2 top-2 transition-all group-focus-within:top-[-10px] group-focus-within:text-blue-500"
            >
              Mot de passe
            </label>
            <input
              type={visible ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Votre mot de passe"
              className={`w-full border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md p-3 mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 transform group-focus-within:scale-105`}
              aria-label="Mot de passe"
            />
            {errors.password && (
              <span className="text-red-500 text-xs">{errors.password}</span>
            )}
            <span
              className="absolute top-3 mt-2 right-3 cursor-pointer"
              onClick={() => setVisible(!visible)}
            >
              {visible ? (
                <Eye size={30} className="text-blue-600 " />
              ) : (
                <EyeClosed size={30} className="text-blue-600" />
              )}
            </span>
          </div>
          {/* Bouton de Connexion */}
          <div>
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              Se connecter
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <Link
            to="/passwordreset"
            className="text-blue-600 hover:underline text-sm"
          >
            Mot de passe oublié ?
          </Link>
          <p className="text-gray-600 text-sm mt-4">
            Vous n'avez pas encore de compte ?
            <Link to="/register" className="text-blue-600 hover:underline">
              Inscrivez-vous
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
