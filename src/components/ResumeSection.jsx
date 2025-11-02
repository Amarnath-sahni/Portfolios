import { motion } from "framer-motion";

const educationData = [
  { qualification: "Xth", board: "BSEB", marks: 79 },
  { qualification: "XIIth", board: "BSEB", marks: 71 },
  { qualification: "Graduation(B.tech)", board: "IKG Punjab Technical University", marks: 84.17 },
];

const ResumeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-yellow-400 inline-block pb-2 uppercase tracking-wider">
          My Academic Journey
        </h2>

        <div className="flex flex-col gap-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-green-400">{edu.qualification}</h3>
              <p className="text-gray-300 mt-1">
                <span className="font-medium">Board/University:</span> {edu.board}
              </p>

              {/* Percentage bar */}
              <div className="mt-4 w-full h-6 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${edu.marks}%` }}
                  transition={{ duration: 1.2, delay: index * 0.3, ease: "easeOut" }}
                  className="h-6 bg-gradient-to-r from-green-400 via-pink-500 to-blue-500 rounded-full"
                />
              </div>

              <p className="mt-1 text-gray-300 font-medium">{edu.marks}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
