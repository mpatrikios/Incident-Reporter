// components/IncidentReport/sections/BasicInformation.tsx
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

export const BasicInformation: React.FC<BasicInformationProps> = ({ data, onUpdate }) => {
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
    <div className="errorDisplay">
      {/* Error display */}
      {error && (
        <div className="errorChild">
          {error}
        </div>
      )}

      {/* Form fields container */}
      <div className="space-y-4 w-full">
        {/* Template Selection */}
        <div className="w-full">
          <label 
            htmlFor="templateName" 
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Incident Type Template
          </label>
          <select
            id="templateName"
            name="templateName"
            value={data.templateName}
            onChange={(e) => onUpdate('templateName', e.target.value)}
            className="w-full p-3 bg-black text-white rounded-md"
          >
            <option value="">Select a template</option>
            {templates.map((template) => (
              <option key={template} value={template}>
                {template}
              </option>
            ))}
          </select>
        </div>

        {/* Engineer Name */}
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Civil Engineer's Name
          </label>
          <input
            type="text"
            value={data.engineerName}
            onChange={(e) => onUpdate('engineerName', e.target.value)}
            className="w-full p-3 bg-black text-white rounded-md"
            placeholder="Enter engineer's name"
          />
        </div>

        {/* Reporter Name */}
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Incident Reporter's Name
          </label>
          <input
            type="text"
            value={data.reporterName}
            onChange={(e) => onUpdate('reporterName', e.target.value)}
            className="w-full p-3 bg-black text-white rounded-md"
            placeholder="Enter reporter's name"
          />
        </div>

        {/* Location */}
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Incident Location
          </label>
          <input
            type="text"
            value={data.location}
            onChange={(e) => onUpdate('location', e.target.value)}
            className="w-full p-3 bg-black text-white rounded-md"
            placeholder="Enter incident location"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-6">
        <button 
          className="px-4 py-2 text-gray-500 bg-gray-100 rounded-md"
          disabled
        >
          Previous Section
        </button>
        <button 
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
          onClick={() => {/* handle next */}}
        >
          Next Section
        </button>
      </div>
    </div>
  );
};

export default BasicInformation;