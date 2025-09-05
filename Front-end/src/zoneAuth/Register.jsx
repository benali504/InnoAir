import { Eye, EyeClosed } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaBus,FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register as registerUser } from "../features/auth/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [errorsBackend, setErrorsBackend] = useState([]);
  const { register, handleSubmit, watch } = useForm();

  const validate = (data) => {
    const newErrors = {};

    if (!data.firstname) {
      newErrors.firstname = "First name is required";
    }

    if (!data.lastname) {
      newErrors.lastname = "Last name is required";
    }

    if (!data.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!data.password) {
      newErrors.password = "Password is required";
    } else if (data.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleRegister = (data) => {
    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(registerUser(data))
        .then((res) => {
          console.log(res);
          if (res.payload && res.payload.userId) {
            navigate("/login");
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
            <FaBus className="text-blue-600 animate-bounce" size={50} />
            <FaUser className="text-blue-600 animate-bounce" size={50} />
          </div>
          <h1 className="text-xl font-semibold text-center text-gray-800 mt-4">
            S'inscrire
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

        <form onSubmit={handleSubmit(handleRegister)} className="mt-6 space-y-5">
          {/* First Name */}
          <div className="relative group">
            <label
              htmlFor="firstname"
              className="absolute text-gray-500 text-base left-2 top-2 transition-all group-focus-within:top-[-10px] group-focus-within:text-blue-500"
            >
              Prénom
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Votre prénom"
              {...register("firstname")}
              className={`w-full border ${
                errors.firstname ? "border-red-500" : "border-gray-300"
              } rounded-md p-3 mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 transform group-focus-within:scale-105`}
              aria-label="Prénom"
            />
            {errors.firstname && (
              <span className="text-red-500 text-xs">{errors.firstname}</span>
            )}
          </div>

          {/* Last Name */}
          <div className="relative group">
            <label
              htmlFor="lastname"
              className="absolute text-gray-500 text-base left-2 top-2 transition-all group-focus-within:top-[-10px] group-focus-within:text-blue-500"
            >
              Nom
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Votre nom"
              {...register("lastname")}
              className={`w-full border ${
                errors.lastname ? "border-red-500" : "border-gray-300"
              } rounded-md p-3 mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 transform group-focus-within:scale-105`}
              aria-label="Nom"
            />
            {errors.lastname && (
              <span className="text-red-500 text-xs">{errors.lastname}</span>
            )}
          </div>

          {/* Email */}
          <div className="relative group">
            <label
              htmlFor="email"
              className="absolute text-gray-500 text-base left-2 top-2 transition-all group-focus-within:top-[-10px] group-focus-within:text-blue-500"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre email"
              {...register("email")}
              className={`w-full border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md p-3 mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 transform group-focus-within:scale-105`}
              aria-label="Email"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email}</span>
            )}
          </div>

          {/* Phone */}
          <div className="relative group">
            <label
              htmlFor="phone"
              className="absolute text-gray-500 text-base left-2 top-2 transition-all group-focus-within:top-[-10px] group-focus-within:text-blue-500"
            >
              Téléphone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Votre téléphone"
              {...register("phone")}
              className={`w-full border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-md p-3 mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 transform group-focus-within:scale-105`}
              aria-label="Téléphone"
            />
            {errors.phone && (
              <span className="text-red-500 text-xs">{errors.phone}</span>
            )}
          </div>

          {/* Password */}
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
              {...register("password")}
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

          {/* Confirm Password */}
          <div className="relative group">
            <label
              htmlFor="confirmPassword"
              className="absolute text-gray-500 text-base left-2 top-2 transition-all group-focus-within:top-[-10px] group-focus-within:text-blue-500"
            >
              Confirmer le mot de passe
            </label>
            <input
              autoComplete="current-password"
              type={visible ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirmer votre mot de passe"
              {...register("confirmPassword")}
              className={`w-full border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-md p-3 mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 transform group-focus-within:scale-105`}
              aria-label="Confirmer le mot de passe"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-xs">
                {errors.confirmPassword}
              </span>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            S'inscrire
          </button>

          <p className="text-center mt-4">
            Vous avez déjà un compte ?{" "}
            <Link to="/login" className="text-blue-600">
              Se connecter
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
