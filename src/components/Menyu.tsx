import React from "react";
import { motion } from "framer-motion";
import { MENU_ITEMS } from "../constants/index";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05 } }),
};

export default function MenuGrid() {
  return (
    <div className="py-10 bg-gray-50">
      <div className="w-full mx-auto max-w-7xl  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {["taomlar", "ichimliklar", "shirinliklar"].map((cat, colIndex) => (
          <div key={cat} className="space-y-4">
            <h2 className="text-xl font-bold text-center capitalize">{cat}</h2>
            <div className="grid grid-cols-1 gap-4">
              {MENU_ITEMS[cat].map((item, i) => (
                <motion.div
                  key={item.id}
                  className="p-4 bg-white rounded-lg shadow hover:shadow-lg"
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
