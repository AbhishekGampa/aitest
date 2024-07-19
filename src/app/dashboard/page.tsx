"use client";
import { useGetDashboardDataQuery } from "@/rtkquery/homeapis";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardPage = () => {
  const searchParams = useSearchParams();
  const { data, error } = useGetDashboardDataQuery({});
  console.log("data: ", data);
  const params = searchParams.get("params");

  const [filteredData, setFilteredData] = useState<any>([]);
  console.log("filteredData: ", filteredData);
  console.log("filteredData?.[0]?.task_run", filteredData?.[0]?.metadata[0]);

  useEffect(() => {
    if (data && params) {
      console.log("params: ", params);
      const filtered = data.filter((item: any) => item.card_type === params);
      setFilteredData(filtered);
    }
  }, [data, params]);

  const formatKey = (key: string) => {
    return key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const statsData = filteredData?.[0]?.metadata[0].stats;
  console.log(
    "filteredData?.[0]?.metadata[0].stats: ",
    filteredData?.[0]?.metadata[0].stats
  );

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
    <div className="px-10 " >
      <div className="flex flex-col">
        <div
          className="text-2xl font-normal font-display "
          style={{ color: "#455166" }}
        >
          <h1>Hello, John</h1>
        </div>
        <div className="text-2xl font-medium font-display">
          Dashboard of your productivity
        </div>
      </div>
      <div className="mt-5 flex flex-row gap-4">
        <div>
          <h1 className="text-lg font-medium font-display">
            {params === "saved_automation"
              ? "Time saved with automation"
              : params === "saved_time"
              ? "Team saved time"
              : null}
          </h1>
          <h2 className="text-black font-bold">
            {filteredData?.[0]?.metadata[0]?.task_run &&
            !isNaN(filteredData?.[0]?.metadata[0]?.task_run)
              ? `${Math.floor(
                  filteredData?.[0]?.metadata[0]?.task_run / 60
                )}h ${filteredData?.[0]?.metadata[0]?.task_run % 60} min / day`
              : ""}
          </h2>
        </div>
      </div>
      <div className="flex flex-row gap-5 mt-5 ">
        {filteredData?.[0]?.metadata?.map((item: any, index: any) => (
          <div key={index} className="contents">
            {Object.entries(item).map(([key, value]) => {
              if (key === "stats") {
                return null;
              }
              return (
                <div
                  key={key}
                  className="mb-4 flex flex-col gap-4 border justify-between w-full border-stroke rounded-xs p-5"
                >
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
      <div className="w-84vw">
        {filteredData?.[0]?.metadata[0].stats ? (
          <Line
            data={chartData}
            options={chartOptions}
            style={{ width: "80vw" }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default DashboardPage;
