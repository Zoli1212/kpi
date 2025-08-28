import { db } from "@/lib/db";
import { IncidentForm } from "../../../../components/incidents/IncidentForm";

const CreateIncidentPage = async () => {
  const companies = await db.company.findMany();
  const systems = await db.system.findMany();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Create New Incident</h1>
      <IncidentForm companies={companies} systems={systems} />
    </div>
  );
};

export default CreateIncidentPage;
