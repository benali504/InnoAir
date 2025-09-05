import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold">Dashboard</div>
        <nav className="flex-1 p-4">
          <ul>
            <li className="mb-2">
              <Link to="profile" className="block p-2 hover:bg-gray-700 rounded">
                Profil
              </Link>
            </li>
            {/* Ajoutez d'autres liens de navigation ici */}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-4 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;