import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../features/auth/authSlice";

const Passwordreset = () => {
  const dispatch = useDispatch();
  const { loading, resetPasswordMessage, error } = useSelector(
    (state) => state.auth
  );
  const [email, setEmail] = useState("");

  const handlePasswordReset = (e) => {
    e.preventDefault();
    dispatch(resetPassword(email)); // Dispatch the reset password action
  };

  return (
    <section className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="p-10 rounded-lg shadow-xl bg-white max-w-lg w-full">
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          Réinitialisation du mot de passe
        </h1>

        {resetPasswordMessage && (
          <div className="text-green-600 text-sm mt-3">
            {resetPasswordMessage}
          </div>
        )}
        {error && <div className="text-red-600 text-sm mt-3">{error}</div>}

        <form onSubmit={handlePasswordReset} className="mt-6 space-y-5">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre email"
              className="w-full border border-gray-300 rounded-md p-3 mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Chargement..." : "Envoyer la demande"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Passwordreset;
