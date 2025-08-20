import { motion } from "framer-motion";

function Banner2() {
  return (
    <div>
      <div className="w-full bg-gray-600 py-10 my-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {/* Animated Title Section */}
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Somsa: Milliy Taom
          </motion.h1>

          {/* Animated Paragraph 1 */}
          <motion.p
            className="text-base mt-4 text-gray-300 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Somsa — qovurilgan yoki tandirda pishirilgan mazali milliy taom.
          </motion.p>

          {/* Animated Paragraph 2 */}
          <motion.p
            className="text-base mt-4 text-gray-300 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Ichiga go‘sht, kartoshka yoki sabzavotlar solinadi.
          </motion.p>

          {/* Animated Paragraph 3 */}
          <motion.p
            className="text-base mt-4 text-gray-300 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Har bir hududda o‘ziga xos retsepti bor.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
