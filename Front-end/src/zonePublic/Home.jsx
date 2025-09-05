import { MoveDownRight, MoveUpRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import vitrine from "./../assets/vitrines/vitrine4.jpg?url";

const Home = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["10:00", "10:15", "10:30", "10:45", "11:00"], // Time intervals for the data
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Temperature (°C)",
      data: [22, 23, 21, 24, 22], // Example data for temperature
    },
    {
      name: "Humidity (%)",
      data: [60, 55, 58, 57, 59], // Example data for humidity
    },
    {
      name: "Pressure (hPa)",
      data: [1012, 1011, 1013, 1012, 1011], // Example data for pressure
    },
    {
      name: "VOC (ppm)",
      data: [0.05, 0.06, 0.04, 0.07, 0.05], // Example data for VOC levels
    },
  ]);

  useEffect(() => {}, []);

  return (
    <div>
      <section
        id="vitrine"
        className="relative h-[70vh] bg-cover bg-no-repeat mt-9"
        style={{ backgroundImage: `url(${vitrine})` }}
      >
        <div
          id="filter"
          className="absolute inset-0 bg-black/70 flex justify-center items-center"
        >
          <div className="text-white font-bold text-3xl drop-shadow uppercase flex items-center space-x-2">
            <span>Welcome, { user.lastname }!!! </span>
          </div>
        </div>
      </section>

      <h1 className="font-semibold text-3xl text-center mb-5">
        Bus N° 347 Data
      </h1>
      <div className="grid grid-cols-4 gap-2 place-items-center">
        <div
          id="box"
          className="bg-white flex flex-col w-40 items-center p-2 shadow-lg rounded "
        >
          <span className="flex">
            <div className="text-lg"> Temperature </div>{" "}
            <MoveUpRight color="green" />
          </span>
          <span className="font-semibold"> 22°C </span>
        </div>
        <div
          id="box"
          className="bg-white flex flex-col w-40 items-center p-2 shadow-lg rounded "
        >
          <span className="flex">
            <div className="text-lg"> Humidity </div>{" "}
            <MoveUpRight color="green" />
          </span>
          <span className="font-semibold"> 60% </span>
        </div>
        <div
          id="box"
          className="bg-white flex flex-col w-40 items-center p-2 shadow-lg rounded "
        >
          <span className="flex">
            <div className="text-lg"> Pressure </div>{" "}
            <MoveUpRight color="green" />
          </span>
          <span className="font-semibold"> 1012 hPa </span>
        </div>
        <div
          id="box"
          className="bg-white flex flex-col w-40 items-center p-2 shadow-lg rounded "
        >
          <span className="flex">
            <div className="text-lg"> VOC </div> <MoveDownRight color="red" />
          </span>
          <span className="font-semibold"> 0.05 ppm </span>
        </div>
      </div>

      <div id="graphs" className="mt-5 flex justify-center">
        <div>
          <Chart options={options} series={series} type="line" width="500" />
        </div>
      </div>
    </div>
  );
};

export default Home;
