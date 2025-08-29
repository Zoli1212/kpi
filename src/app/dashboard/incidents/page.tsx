import { auth as getAuthSession } from "@/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { IncidentsDataTable } from "@/components/incidents/IncidentsDataTable";
import Link from "next/link";

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
                  <Link href="/dashboard" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>Vissza a Dashboardra</span>
      </Link>
      <h1 className="text-3xl font-bold mb-6">Incidenskezelés</h1>
      {/* @ts-ignore */}
      <IncidentsDataTable data={incidents} />
    </div>
  );
}
