import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { SlidersHorizontal, CheckCircle2, Headphones } from 'lucide-react';
import { PLANTS } from '../constants';

export default function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Hero Banner */}
      <section className="relative rounded-2xl overflow-hidden bg-primary aspect-[21/9] flex items-center px-6 py-6 group cursor-pointer mx-4 mt-4">
        <div className="relative z-10">
          <h2 className="text-white text-2xl font-extrabold mb-1">空间方案定制</h2>
          <p className="text-white/70 text-xs">专业园艺师上门规划 · 一站式租摆</p>
          <button className="mt-4 px-6 py-2 bg-white text-primary text-xs font-bold rounded-full hover:bg-surface transition-colors">
            立即预约
          </button>
        </div>
        <div className="absolute right-[-20px] bottom-[-20px] opacity-10 rotate-12">
          <LeafIcon size={160} />
        </div>
      </section>

      {/* Segmented Control */}
      <div className="flex justify-between items-center">
        <div className="flex gap-8">
          <button className="relative pb-2 text-primary font-extrabold text-lg">
            单盆租赁
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full" />
          </button>
          <button className="pb-2 text-on-surface/30 font-bold text-lg hover:text-on-surface/50 transition-colors">
            企业方案
          </button>
        </div>
        <button className="flex items-center gap-2 text-on-surface/60 text-xs font-bold uppercase tracking-widest">
          <SlidersHorizontal className="w-4 h-4" />
          筛选
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-4">
        {PLANTS.map((plant, index) => (
          <motion.div
            key={plant.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => navigate(`/product/${plant.id}`)}
            className="group flex flex-col bg-white border border-surface-container-low rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div className="relative aspect-square overflow-hidden bg-surface-container-low">
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 px-2 py-1 bg-white/80 backdrop-blur-md rounded-lg text-[10px] font-bold text-primary">
                {plant.tags[0]}
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-bold text-sm text-on-surface truncate">{plant.name}</h3>
              <div className="mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-secondary/60" />
                <span className="text-[10px] text-secondary/70 font-medium">包含养护</span>
              </div>
              <div className="mt-auto pt-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-primary font-extrabold text-lg">¥{plant.price}</span>
                  <span className="text-[10px] text-on-surface/40 font-bold uppercase tracking-widest">/月起</span>
                </div>
                <button className="w-full mt-3 py-2.5 bg-primary text-white rounded-xl text-[11px] font-bold active:scale-95 transition-transform">
                  立即预约
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Why Us */}
      <section className="px-6 py-8 bg-surface-container-low rounded-3xl border border-surface-container-low mx-4">
        <h4 className="font-extrabold text-primary text-lg mb-6">为什么选择森息 · Flora Lease？</h4>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
              <CheckCircle2 className="text-on-secondary-container w-6 h-6" />
            </div>
            <p className="text-xs font-extrabold text-primary">品质严选</p>
            <p className="text-[10px] text-on-surface/50 leading-relaxed">
              每一株绿植都经过专业培育与健康筛选
            </p>
          </div>
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
              <Headphones className="text-on-secondary-container w-6 h-6" />
            </div>
            <p className="text-xs font-extrabold text-primary">无忧养护</p>
            <p className="text-[10px] text-on-surface/50 leading-relaxed">
              定期上门巡检，枯萎或长势不佳免费更换
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function LeafIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a8 8 0 0 1-8 8Z" />
      <path d="M18.99 2.01c-1 2-2 4.18-2 8" />
      <path d="M3 22c0-3 1.5-5.5 4-8" />
    </svg>
  );
}
