"use client";
import { motion } from "framer-motion";
import { Award, MapPin, Clock, Shield } from "lucide-react";
import { trustPoints } from "@/data/site";

const icons = [Award, MapPin, Clock, Shield];
const colors = ["text-blue-400", "text-green-400", "text-yellow-400", "text-purple-400"];

export default function TrustBar() {
  return (
    <section
      className="relative py-0"
      style={{
        background: "linear-gradient(180deg, #030d1a 0%, #0a1f3d 100%)",
      }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y-0 divide-x-0 lg:divide-x border-b"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          {trustPoints.map((point, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`flex flex-col sm:flex-row items-center sm:items-start gap-3 px-6 py-8 ${
                  idx < 2 ? "border-b lg:border-b-0" : ""
                } ${idx % 2 === 0 && idx < 2 ? "border-r lg:border-r-0" : ""}`}
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${colors[idx].replace("text-", "bg-").replace("-400", "-400/15")}`}>
                  <Icon size={20} className={colors[idx]} />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-black text-white leading-none mb-1">
                    {point.value}
                  </div>
                  <div className="text-blue-200 font-semibold text-sm">{point.label}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{point.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
