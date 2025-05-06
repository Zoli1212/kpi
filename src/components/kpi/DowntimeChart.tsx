"use client";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import the ReactApexChart component
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function DowntimeChart() {
  const [timeRange, setTimeRange] = useState("havi");
  
  const series = [{
    name: 'Állásidő',
    data: [31, 40, 28, 51, 42, 109, 100, 120, 80, 90, 110, 95]
  }];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    xaxis: {
      categories: ["Jan", "Febr", "Márc", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szept", "Okt", "Nov", "Dec"],
      labels: {
        style: {
          colors: '#6B7280',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Perc',
        style: {
          color: '#6B7280',
        },
      },
      labels: {
        style: {
          colors: '#6B7280',
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return `${val} perc`;
        }
      }
    },
    colors: ['#3B82F6'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.2,
      },
    },
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Állásidő áttekintés
        </h3>
        <div className="flex items-center space-x-2">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="w-32 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800"
          >
            <option value="napi">Napi</option>
            <option value="heti">Heti</option>
            <option value="havi">Havi</option>
            <option value="éves">Éves</option>
          </select>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
}
