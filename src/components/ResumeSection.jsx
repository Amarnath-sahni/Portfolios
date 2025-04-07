import { motion } from "framer-motion";

const ResumeSection = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-6">Resume</h2>
      
      {/* Education Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <h3 className="text-2xl font-medium mb-4">Education</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Qualification</th>
              <th className="border border-gray-300 p-2">University/Board</th>
              <th className="border border-gray-300 p-2">Marks/CGPA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">10th</td>
              <td className="border border-gray-300 p-2">BSEB</td>
              <td className="border border-gray-300 p-2">79%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">12th</td>
              <td className="border border-gray-300 p-2">BSEB</td>
              <td className="border border-gray-300 p-2">71%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Graduation</td>
              <td className="border border-gray-300 p-2">IKG Punjab Technical University</td>
              <td className="border border-gray-300 p-2">CGPA: 8.14/10</td>
            </tr>
          </tbody>
        </table>
      </div>
      
  
    </section>
  );
};

export default ResumeSection;
