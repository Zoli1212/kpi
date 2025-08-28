"use client";

import { useState } from "react";
import { Company, System } from "@prisma/client";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button/Button";

interface IncidentFormProps {
  companies: Company[];
  systems: System[];
}

export const IncidentForm = ({ companies, systems }: IncidentFormProps) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    type: "Planned",
    companyId: companies[0]?.id.toString() || "",
    systemId: systems[0]?.id.toString() || "",
    description: "",
    beginning: "",
    end: "",
    urgency: "Low",
    criticality: "Low",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/incidents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/dashboard/incidents');
        router.refresh();
      } else {
        // Handle errors
        console.error("Failed to create incident");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Incident Type */}
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">Incident Type</label>
        <select id="type" name="type" value={formData.type} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
          <option>Planned</option>
          <option>Unplanned</option>
        </select>
      </div>

      {/* Company */}
      <div>
        <label htmlFor="companyId" className="block text-sm font-medium text-gray-700">Company</label>
        <select id="companyId" name="companyId" value={formData.companyId} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
          {companies.map(company => (
            <option key={company.id} value={company.id}>{company.name}</option>
          ))}
        </select>
      </div>

      {/* System */}
      <div>
        <label htmlFor="systemId" className="block text-sm font-medium text-gray-700">System</label>
        <select id="systemId" name="systemId" value={formData.systemId} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
          {systems.map(system => (
            <option key={system.id} value={system.id}>{system.name}</option>
          ))}
        </select>
      </div>

      {/* Beginning / End */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <label htmlFor="beginning" className="block text-sm font-medium text-gray-700">Start Time</label>
            <input type="datetime-local" id="beginning" name="beginning" value={formData.beginning} onChange={handleChange} className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <div>
            <label htmlFor="end" className="block text-sm font-medium text-gray-700">End Time</label>
            <input type="datetime-local" id="end" name="end" value={formData.end} onChange={handleChange} className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
      </div>

      {/* Urgency / Criticality */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
              <label htmlFor="urgency" className="block text-sm font-medium text-gray-700">Urgency</label>
              <select id="urgency" name="urgency" value={formData.urgency} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
              </select>
          </div>
          <div>
              <label htmlFor="criticality" className="block text-sm font-medium text-gray-700">Criticality</label>
              <select id="criticality" name="criticality" value={formData.criticality} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
              </select>
          </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows={3} className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
      </div>

      <div className="flex justify-end">
        <Button type="submit">Save Incident</Button>
      </div>
    </form>
  );
};
