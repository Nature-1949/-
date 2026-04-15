import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Share2, Droplets, Flower2, Calendar, Scissors, RefreshCw } from 'lucide-react';
import { PLANTS, SERVICES } from '../constants';
import { cn } from '../lib/utils';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const plant = PLANTS.find(p => p.id === id);
  const [duration, setDuration] = useState(3);

  const totalPrice = useMemo(() => (plant?.price || 0) * duration, [plant, duration]);

  if (!plant) return <div>Plant not found</div>;

  return (
    <div className="bg-surface min-h-screen pb-40">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full flex justify-between items-center h-16 bg-white/80 backdrop-blur-xl z-50 px-6">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-surface-container-low rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-primary" />
        </button>
        <h1 className="font-extrabold tracking-tight text-lg text-primary">森息 · Flora Lease</h1>
        <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors">
          <Share2 className="w-5 h-5 text-primary" />
        </button>
      </header>

      {/* Hero Image */}
      <section className="relative w-full h-[60vh] overflow-hidden pt-16 bg-surface-container-low">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-contain p-4"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          <span className="w-8 h-1 bg-primary rounded-full" />
          <span className="w-2 h-1 bg-outline-variant rounded-full" />
          <span className="w-2 h-1 bg-outline-variant rounded-full" />
        </div>
      </section>

      {/* Content Canvas */}
      <div className="-mt-10 relative z-10">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white pt-10 pb-10 px-6"
        >
          {/* Title and Badges */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tighter text-primary mb-2">{plant.name.split(' · ')[1] || plant.name}</h2>
              <p className="text-secondary font-bold tracking-wide text-sm italic opacity-60">{plant.scientificName}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                信用免押
              </span>
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                包含养护
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-12">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-primary tracking-tighter">¥{plant.price}</span>
              <span className="text-on-surface-variant font-bold text-sm">/月起租</span>
            </div>
          </div>

          {/* Bento Grid Features */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            <div className="bg-surface-container-low p-6 rounded-3xl flex flex-col justify-between h-44">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                <Droplets className="text-primary w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-primary mb-1">养护要求</p>
                <p className="text-[11px] text-on-surface-variant font-medium leading-relaxed">{plant.maintenance}</p>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-3xl flex flex-col justify-between h-44">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                <Flower2 className="text-primary w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-primary mb-1">观赏周期</p>
                <p className="text-[11px] text-on-surface-variant font-medium leading-relaxed">{plant.viewingPeriod}</p>
              </div>
            </div>
          </div>

          {/* Lease Duration Slider */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xs font-extrabold text-primary uppercase tracking-[0.2em]">租赁时长</h3>
              <div className="bg-primary/5 px-5 py-2 rounded-full border border-primary/10 flex items-baseline gap-1">
                <motion.span 
                  key={duration}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-2xl font-black text-primary"
                >
                  {duration}
                </motion.span>
                <span className="text-xs font-bold text-primary/60">个月</span>
              </div>
            </div>
            <div className="relative px-2">
              <input
                type="range"
                min="1"
                max="24"
                step="1"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
                className="w-full h-2 rounded-lg cursor-pointer accent-primary"
              />
              <div className="flex justify-between mt-6 text-[10px] font-black text-outline-variant uppercase tracking-tighter">
                {['1个月', '6个月', '12个月', '18个月', '24个月'].map((label, i) => (
                  <span key={label} className={cn(
                    "transition-colors",
                    Math.abs(duration - (i * 6 || 1)) < 3 ? "text-primary" : ""
                  )}>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="mb-16">
            <h3 className="text-xs font-extrabold text-primary uppercase tracking-[0.2em] mb-8">尊享管家服务</h3>
            <div className="relative pl-10 border-l-2 border-tertiary-fixed ml-3 space-y-10">
              {SERVICES.map((service) => (
                <div key={service.id} className="relative">
                  <span className="absolute -left-[51px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-tertiary-fixed shadow-sm" />
                  <div>
                    <h4 className="font-extrabold text-primary flex items-center gap-2 text-base">
                      {service.icon === 'Calendar' && <Calendar className="w-4 h-4" />}
                      {service.icon === 'Scissors' && <Scissors className="w-4 h-4" />}
                      {service.icon === 'RefreshCw' && <RefreshCw className="w-4 h-4" />}
                      {service.title}
                    </h4>
                    <p className="text-sm text-on-surface-variant mt-2 leading-relaxed font-medium opacity-80">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Story */}
          <div className="mb-10">
            <h3 className="text-xs font-extrabold text-primary uppercase tracking-[0.2em] mb-8">植物物语</h3>
            <div className="flex gap-8 items-start">
              <div className="w-1/3 aspect-[3/4] rounded-2xl overflow-hidden shrink-0 shadow-lg bg-surface-container-low p-2">
                <img
                  src={plant.image}
                  alt="Detail"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg text-primary font-bold italic leading-relaxed tracking-tight">
                  "{plant.description.split('。')[0]}。"
                </p>
                <p className="text-sm text-on-surface-variant mt-6 leading-relaxed font-medium opacity-70">
                  {plant.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Action Bar */}
      <footer className="fixed bottom-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl shadow-[0_-10px_40px_rgba(6,27,14,0.04)] border-t border-surface-container-low">
        <div className="px-6 py-6 flex items-center justify-between mx-auto">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-on-surface-variant tracking-[0.2em] uppercase mb-1">预计租金</span>
            <div className="flex items-baseline gap-1">
              <motion.span 
                key={totalPrice}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-3xl font-black text-primary tracking-tighter"
              >
                ¥{totalPrice}
              </motion.span>
              <span className="text-xs font-bold text-on-surface-variant opacity-60">/ {duration}月</span>
            </div>
          </div>
          <button 
            onClick={() => navigate('/my-plan')}
            className="bg-primary text-white px-10 py-4 rounded-full font-black tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-primary/20"
          >
            立即租赁
          </button>
        </div>
      </footer>
    </div>
  );
}
