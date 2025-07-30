import { motion } from "framer-motion";
import { Satellite } from "lucide-react";

export default function LoadingScreen({ isVisible }: { isVisible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-0 bg-white z-50 flex items-center justify-center ${!isVisible ? 'pointer-events-none' : ''}`}
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mb-4 mx-auto"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 text-gray-600 font-medium"
        >
          <Satellite className="w-5 h-5 text-primary" />
          Loading Atlantis Telkoms...
        </motion.div>
      </div>
    </motion.div>
  );
}
