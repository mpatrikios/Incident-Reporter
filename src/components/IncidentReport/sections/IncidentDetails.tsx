// components/IncidentReport/sections/IncidentDetails.tsx
import React, { useState, useEffect } from 'react';

interface BasicInformationData {
  templateName: string;
  engineerName: string;
  reporterName: string;
  location: string;
}

interface BasicInformationProps {
  data: BasicInformationData;
  onUpdate: (field: string, value: string) => void;
}

export const IncidentDetails: React.FC<BasicInformationProps> = ({ data, onUpdate }) => {
  const [templates, setTemplates] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch available templates when component mounts
  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await fetch('http://localhost:3000/templates');
        if (!response.ok) {
          throw new Error('Failed to fetch templates');
        }
        const data = await response.json();
        setTemplates(data);
      } catch (err) {
        console.error('Error fetching templates:', err);
        setError('Could not load templates');
      }
    };

    fetchTemplates();
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Basic Information</h2>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md">
          {error}
        </div>
      )}

      <div className="space-y-4">
        {/* Template Selection */}
        <div>
          <label 
            htmlFor="templateName" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Incident Type Template
          </label>
          <select
            id="templateName"
            name="templateName"
            value={data.templateName}
            onChange={(e) => onUpdate('templateName', e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a template</option>
            {templates.map((template) => (
              <option key={template} value={template}>
                {template}
              </option>
            ))}
          </select>
        </div>

        {/* Civil Engineer's Name */}
        <div>
          <label 
            htmlFor="engineerName" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Civil Engineer's Name
          </label>
          <input
            type="text"
            id="engineerName"
            name="engineerName"
            value={data.engineerName}
            onChange={(e) => onUpdate('engineerName', e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter engineer's name"
          />
        </div>

        {/* Incident Reporter's Name */}
        <div>
          <label 
            htmlFor="reporterName" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Incident Reporter's Name
          </label>
          <input
            type="text"
            id="reporterName"
            name="reporterName"
            value={data.reporterName}
            onChange={(e) => onUpdate('reporterName', e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter reporter's name"
          />
        </div>

        {/* Location */}
        <div>
          <label 
            htmlFor="location" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Incident Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={data.location}
            onChange={(e) => onUpdate('location', e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter incident location"
          />
        </div>
      </div>
    </div>
  );
};

export default IncidentDetails;