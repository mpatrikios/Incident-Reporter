// components/IncidentReport/IncidentReport.tsx
import React, { useState } from 'react';
import BasicInformation from './sections/BasicInformation';
import IncidentDetails from './sections/IncidentDetails';
import EnvironmentalConditions from './sections/EnvironmentalConditions';
import WitnessInfo from './sections/WitnessInfo';
import Photos from './sections/Photos';
// Import other sections...

interface IncidentReportData {
  templateName: string;
  engineerName: string;
  reporterName: string;
  location: string;
  // ... other fields for other sections
}

const IncidentReport: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<IncidentReportData>({
    templateName: '',
    engineerName: '',
    reporterName: '',
    location: '',
    // ... initialize other fields
  });

  const sections = [
    { id: 0, title: 'Basic Information', component: BasicInformation },
    { id: 1, title: 'Incident Details', component: IncidentDetails },
    { id: 2, title: 'Environmental Conditions', component: EnvironmentalConditions },
    { id: 3, title: 'Witness Information', component: WitnessInfo },
    { id: 4, title: 'Photos & Documentation', component: Photos }
  ];

  const handleUpdate = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const CurrentSection = sections[currentStep].component;

//   const renderCurrentSection = () => {
//     switch (currentStep) {
//       case 0:
//         return (
//           <BasicInformation
//             data={formData}
//             onUpdate={handleUpdate}
//           />
//         );
//       // Add other cases for other sections
//       default:
//         return null;
//     }
//   };

return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - made narrower */}
      <div className="w-56 bg-white shadow-lg">
        <div className="p-4 bg-blue-600 text-white">
          <h2 className="text-lg font-semibold">Incident Report</h2>
        </div>
        <nav className="p-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setCurrentStep(section.id)}
              className={`w-full text-left p-3 rounded-lg mb-1 flex items-center ${
                currentStep === section.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'hover:bg-gray-50'
              }`}
            >
              <span className={`${
                currentStep === section.id ? 'font-medium' : ''
              }`}>
                {section.title}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-6">{sections[currentStep].title}</h1>
          <CurrentSection 
            data={formData}
            onUpdate={handleUpdate}
          />

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6 pt-4 border-t">
            <button
              onClick={() => setCurrentStep(prev => prev - 1)}
              disabled={currentStep === 0}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200"
            >
              Previous Section
            </button>
            <button
              onClick={() => setCurrentStep(prev => prev + 1)}
              disabled={currentStep === sections.length - 1}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700"
            >
              Next Section
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentReport;