import { LogIn } from "lucide-react";
import React, { useState } from "react";
import { FaBus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "../../features/auth/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const [visiblePanelAuth, setVisiblePanelAuth] = useState(false);

  const handleLogout = () => {
    console.log("delete user run");
    dispatch(deleteUser());
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-0 w-full p-2 bg-white shadow-lg z-50 flex justify-between items-center">
      <Link to="/" id="logo_brand" className="flex gap-2 items-center">
        <span>
          <FaBus className="text-blue-400" size="50" />
        </span>
      </Link>

      <div className="flex gap-2 items-center justify-between">
        <Link to="/" className="text-sm hover:text-blue-700 ">
          Accueil
        </Link>

        <Link to="/product/:id" className="text-sm hover:text-blue-700 ">
          Services
        </Link>
        <Link to="/contact" className="text-sm hover:text-blue-700 ">
          Contact
        </Link>

        {user && Object.keys(user).length === 0 ? (
          <Link to="/login">
            <LogIn />
          </Link>
        ) : (
          <div
            id="userProfile"
            onMouseEnter={() => setVisiblePanelAuth(true)}
            onMouseLeave={() => setVisiblePanelAuth(false)}
            className="relative"
          >
            {user && user.imgUrl ? (
              <img
                src={import.meta.env.VITE_BACKEND_URL + user.imgUrl}
                alt="User Profile"
                className="h-7 w-7 rounded-full cursor-pointer"
              />
            ) : (
              <div className="h-7 w-7 rounded-full bg-gray-300 cursor-pointer"></div>
            )}
            {visiblePanelAuth && (
              <div
                id="userPanel"
                className="absolute right-0 w-[10rem] rounded bg-white z-30 shadow"
              >
                <span className="block px-2 p-2 text-black">
                  {user ? user.name : "Utilisateur"}
                </span>
                <Link
                  to="/dashboard/profile"
                  className="block px-2 p-2 hover:bg-blue-500 hover:text-white"
                >
                  Voir profil
                </Link>
                <span
                  onClick={handleLogout}
                  className="block px-2 p-2 cursor-pointer hover:bg-blue-500 hover:text-white"
                >
                  Se déconnecter
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
