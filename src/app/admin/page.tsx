import type { Metadata } from "next";
import { KPIMetrics } from "../../components/kpi/KPIMetrics";
import React from "react";
import DowntimeChart from "../../components/kpi/DowntimeChart";
import StatisticsChart from "../../components/kpi/StatisticsChart";
import RecentIncidents from "../../components/kpi/RecentIncidents";

export const metadata: Metadata = {
  title: "KPI Admin Dashboard | KPI - Next.js Dashboard Template",
  description: "Ez a KPI Admin irányítópult főoldala",
};

export default function KPIAdmin() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <KPIMetrics />
      </div>

      <div className="col-span-12 xl:col-span-7">
        <RecentIncidents />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <DowntimeChart />
      </div>

      <div className="col-span-12">
        <StatisticsChart />
      </div>
    </div>
  );
}
