import { motion } from "framer-motion";

const FeedbackSection = () => {
  return (
    <section className="flex justify-center items-center py-20 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-[8in] bg-black text-white rounded-2xl p-10 shadow-xl flex flex-col items-center text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">💬 We Value Your Feedback</h2>
        <p className="text-lg mb-6 text-gray-300">
          Thank you for taking the time to view our work. Your suggestions and feedback help us
          grow and improve. If you noticed anything we can do better, please let us know through
          the form below. We deeply appreciate your support!
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSddokeAgIMo3DyV_-pD_-dyTy_7yIASfsrDvLbiV2sMeNTp8A/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition"
        >
          Give Feedback
        </a>
      </motion.div>
    </section>
  );
};

export default FeedbackSection;
