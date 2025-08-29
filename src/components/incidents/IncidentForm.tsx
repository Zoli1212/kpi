"use client";

import { useState } from "react";
import { Company, System } from "@prisma/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createIncidentAction } from "@/app/actions/incidents";
import Button from "@/components/ui/button/Button";

interface IncidentFormProps {
  companies: Company[];
  systems: System[];
}

export const IncidentForm = ({ companies, systems }: IncidentFormProps) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    type: "Tervezett",
    companyId: companies[0]?.id.toString() || "",
    systemId: systems[0]?.id.toString() || "",
    description: "",
    beginning: "",
    end: "",
    urgency: "Alacsony",
    criticality: "1-kritikus",
    cause: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const promise = createIncidentAction(formData);

    toast.promise(promise, {
      loading: 'Incident creation in progress...',
      success: (data) => {
        if (data.success) {
          router.push('/dashboard/incidents');
          return data.message;
        } else {
          throw new Error(data.message);
        }
      },
      error: (err) => err.message || 'An unexpected error occurred.',
    });
  };

  const inputClass = "w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200";
  const labelClass = "block text-sm font-semibold text-gray-600 mb-1";

  const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {children}
      </div>
    </div>
  );

  const isFormValid =
    formData.description.trim() !== "" &&
    formData.beginning.trim() !== "" &&
    formData.end.trim() !== "" &&
    formData.cause.trim() !== "";

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8">
          <Section title="Alapvető Információk">
            {/* Incident Type */}
            <div>
              <label htmlFor="type" className={labelClass}>Incidens Típusa</label>
              <select id="type" name="type" value={formData.type} onChange={handleChange} className={inputClass}>
                <option>Tervezett</option>
                <option>Nem tervezett</option>
              </select>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="companyId" className={labelClass}>Cég/Adatbázis</label>
              <select id="companyId" name="companyId" value={formData.companyId} onChange={handleChange} className={inputClass}>
                {companies.map(company => (
                  <option key={company.id} value={company.id}>{company.name}</option>
                ))}
              </select>
            </div>

            {/* System */}
            <div className="md:col-span-2">
              <label htmlFor="systemId" className={labelClass}>Érintett Rendszer</label>
              <select id="systemId" name="systemId" value={formData.systemId} onChange={handleChange} className={inputClass}>
                {systems.map(system => (
                  <option key={system.id} value={system.id}>{system.name}</option>
                ))}
              </select>
            </div>
          </Section>

          <Section title="Időzítés és Súlyosság">
            {/* Beginning */}
            <div>
              <label htmlFor="beginning" className={labelClass}>Kezdete</label>
              <input type="datetime-local" id="beginning" name="beginning" value={formData.beginning} onChange={handleChange} className={inputClass} />
            </div>

            {/* End */}
            <div>
              <label htmlFor="end" className={labelClass}>Vége</label>
              <input type="datetime-local" id="end" name="end" value={formData.end} onChange={handleChange} className={inputClass} />
            </div>

            {/* Urgency */}
            <div>
              <label htmlFor="urgency" className={labelClass}>Sürgősség</label>
              <select id="urgency" name="urgency" value={formData.urgency} onChange={handleChange} className={inputClass}>
                <option>Alacsony</option>
                <option>Normál</option>
                <option>Magas</option>
              </select>
            </div>

            {/* Criticality */}
            <div>
              <label htmlFor="criticality" className={labelClass}>Kritikusság</label>
              <select id="criticality" name="criticality" value={formData.criticality} onChange={handleChange} className={inputClass}>
                <option>1-kritikus</option>
                <option>2-fontos</option>
                <option>3-egyéb</option>
              </select>
            </div>
          </Section>

          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <label htmlFor="description" className={labelClass}>Részletes Leírás</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows={5} className={`${inputClass} resize-y`}></textarea>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <label htmlFor="cause" className={labelClass}>Kiváltó Ok</label>
            <textarea id="cause" name="cause" value={formData.cause} onChange={handleChange} rows={3} className={`${inputClass} resize-y`}></textarea>
          </div>

          <div className="flex justify-end pt-4">
            <Button type="submit" disabled={!isFormValid}>Incidens Mentése</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
