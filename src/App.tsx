// App.tsx

import IncidentReport from './components/IncidentReport/IncidentReport';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <h1 className="text-2xl p-4">Incident Report System</h1>
      </header>
      <main>
        <IncidentReport />
      </main>
    </div>
  );
}

export default App;


//import React, { useState, useEffect } from 'react';
// interface DocData {
//   name: string;
//   email: string;
// }

// const Doc: React.FC = () => {
//   const [templates, setTemplates] = useState<string[]>([]);
//   const [templateName, setTemplateName] = useState('');
//   const [template, setTemplate] = useState('');
//   const [docData, setDocData] = useState<DocData>({
//     name: '',
//     email: ''
//   });
//   const [error, setError] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   // Fetch available templates when component mounts
//   useEffect(() => {
//     const fetchTemplates = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/templates');
//         if (!response.ok) {
//           throw new Error('Failed to fetch templates');
//         }
//         const data = await response.json();
//         setTemplates(data);
//       } catch (err) {
//         console.error('Error fetching templates:', err);
//         setError('Could not load templates');
//       }
//     };

//     fetchTemplates();
//   }, []);

//   const fetchDoc = async () => {
//     // Reset previous states
//     setError(null);
//     setTemplate('');
//     setIsLoading(true);

//     try {
//       const response = await fetch(`http://localhost:3000/templates/${templateName}`);
      
//       if (!response.ok) {
//         throw new Error('Template not found or server error');
//       }
      
//       const data = await response.text();
//       console.log('Template fetched:', data);
//       setTemplate(data);
//     } catch (error) {
//       console.error('Error fetching template:', error);
//       setError(error instanceof Error ? error.message : 'An unknown error occurred');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setDocData(prev => ({ ...prev, [name]: value }));
//   };

//   const generateFile = () => {
//     if (!template) {
//       setError('Please select and fetch a template first');
//       return;
//     }

//     if (!docData.name.trim() || !docData.email.trim()) {
//       setError('Please fill in all fields');
//       return;
//     }

//     let filledTemplate = template;
//     Object.entries(docData).forEach(([key, value]) => {
//       const regex = new RegExp(`\\{${key}\\}`, 'g');
//       filledTemplate = filledTemplate.replace(regex, value);
//     });

//     const blob = new Blob([filledTemplate], { type: 'text/plain' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = `${templateName}-filled.txt`;
    
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="p-8 max-w-md mx-auto">
//       <h1 className="text-xl font-bold mb-4">Fill the Template</h1>
      
//       {error && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
//           {error}
//         </div>
//       )}

//       <div className="space-y-4">
//         {/* Dropdown for template selection */}
//         <select
//           value={templateName}
//           onChange={(e) => setTemplateName(e.target.value)}
//           className="w-full px-4 py-2 border rounded"
//         >
//           <option value="">Select a Template</option>
//           {templates.map((template) => (
//             <option key={template} value={template}>
//               {template}
//             </option>
//           ))}
//         </select>
        
//         <button
//           onClick={fetchDoc}
//           disabled={!templateName || isLoading}
//           className={`px-6 py-2 rounded ${
//             templateName && !isLoading
//               ? 'bg-blue-500 text-white hover:bg-blue-600'
//               : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//           }`}
//         >
//           {isLoading ? 'Fetching...' : 'Fetch Template'}
//         </button>

//         {template && (
//           <>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={docData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded"
//             />
            
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={docData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded"
//             />
            
//             <button
//               onClick={generateFile}
//               className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//             >
//               Generate Filled Template
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Doc;

// App.tsx
