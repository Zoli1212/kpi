import { auth as getAuthSession } from "@/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { IncidentsDataTable } from "@/components/incidents/IncidentsDataTable";

export default async function IncidentsPage() {
  const session = await getAuthSession();

  if (!session?.user.incidentsReporter) {
    redirect("/dashboard");
  }

  const incidents = await prisma.incident.findMany({
    include: {
      system: true,
      company: true,
      reporter: true,
    },
    orderBy: {
      beginning: 'desc',
    }
  });

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Incident Management</h1>
      {/* @ts-ignore */}
      <IncidentsDataTable data={incidents} />
    </div>
  );
}
