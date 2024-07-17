import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Image from "next/image";
import dashboardIcon from "@/Images/dashboardIcon.svg";
import arrowUpRight from "@/Images/arrowUpRight.svg";
import Link from "next/link";

// Register the necessary components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Stats {
  [key: string]: number;
}

interface Metadata {
  task_run: number;
  stats: Stats;
}

interface Data {
  metadata: Metadata[];
}

interface SavedTimeProps {
  data: Data;
}

const SavedTime: React.FC<SavedTimeProps> = ({ data }) => {
  const [savedTimeData, setSavedTimeData] = useState<Data>(data);

  useEffect(() => {
    setSavedTimeData(data);
  }, [data]);

  const formatKey = (key: string) => {
    return key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const statsData = savedTimeData?.metadata[0]?.stats;

  const chartData = {
    labels: statsData ? Object.keys(statsData) : [],
    datasets: [
      {
        label: "Tasks Run",
        data: statsData ? Object.values(statsData) : [],
        fill: false,
        backgroundColor: "blue",
        borderColor: "blue",
        tension: 0.4, // This property makes the lines curved
        pointBackgroundColor: "white", // White circle inside
        pointBorderColor: "blue", // Blue border for the points
        pointBorderWidth: 2, // Thickness of the border
        pointRadius: 5, // Size of the points
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        grid: {
          display: false, // Hide the x-axis grid lines
        },
        title: {
          display: true,
        },
      },
      y: {
        grid: {
          display: false, // Hide the y-axis grid lines
        },
        title: {
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
  };

  return (
    <div className="flex flex-col gap-3 h-2/3 w-[325px] overflow-scroll items-start justify-between p-4 shrink-0 rounded-3xl bg-gray-100 hide-scrollbar">
      <div className="flex flex-row items-center justify-between w-full">
        <div
          className="flex flex-row gap-2 items-center border p-2 rounded-2xl"
          style={{ borderColor: "#E0E4EA" }}
        >
          <Image src={dashboardIcon} alt="userIcon" height={15} width={15} />
          <h6 className="text-sm">Dashboard</h6>
        </div>
        <div>
          <Link href={"/dashboard?params=saved_time"}>
            <Image
              src={arrowUpRight}
              alt="arrowUpRight"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <div className="text-[#455166] text-lg font-[Inter] font-normal leading-[120%] -tracking-[0.8px]">
        <h1>Team saved time</h1>
        <h6 className="text-black font-bold">
          {data?.metadata[0]?.task_run && !isNaN(data?.metadata[0].task_run)
            ? `${Math.floor(data?.metadata[0].task_run / 60)}h ${
                data?.metadata[0].task_run % 60
              } min / day`
            : ""}
        </h6>
      </div>
      <div className="grid grid-cols-2 gap-2 w-full items-center justify-center">
        {data.metadata.map((item, index) => (
          <div key={index} className="contents">
            {Object.entries(item).map(([key, value]) => {
              if (key === "stats") {
                return null;
              }
              return (
                <div key={key} className="mb-4">
                  <div className="text-[#455166] text-lg font-[Inter] font-normal leading-[120%] -tracking-[0.8px]">
                    <span className="text-sm">{formatKey(key)}</span>
                  </div>
                  <div className="flex flex-row gap-4 hover:backdrop-blur-md font-bold w-full group">
                    <h6>{value}</h6>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="w-full">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default SavedTime;
