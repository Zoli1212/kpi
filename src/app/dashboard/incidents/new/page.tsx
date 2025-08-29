import { db } from "@/lib/db";
import { IncidentForm } from "../../../../components/incidents/IncidentForm";
import Link from "next/link";

const CreateIncidentPage = async () => {
  const companies = await db.company.findMany();
  const systems = await db.system.findMany();

  return (
    <div className="p-6">
                  <Link href="/dashboard/incidents" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>Vissza az incidensekhez</span>
      </Link>
      <h1 className="text-2xl font-bold mb-4">Új incidens létrehozása</h1>
      <IncidentForm companies={companies} systems={systems} />
    </div>
  );
};

export default CreateIncidentPage;
