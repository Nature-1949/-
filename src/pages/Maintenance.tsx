import React from 'react';
import { motion } from 'motion/react';
import { Droplets, ChevronLeft, ChevronRight, Calendar as CalendarIcon, Scissors, RefreshCw, PlusCircle, Leaf } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Maintenance() {
  const [selectedDay, setSelectedDay] = React.useState(12);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12"
    >
      {/* Header */}
      <header className="mt-8 space-y-3 px-6">
        <div className="flex items-center gap-3 text-secondary text-[10px] font-black tracking-[0.3em] uppercase opacity-60">
          <span className="w-10 h-px bg-secondary/30" />
          Maintenance Portfolio
        </div>
        <h1 className="text-5xl font-black tracking-tighter text-primary">养护服务日历</h1>
      </header>

      {/* Status Bento Cards */}
      <section className="grid grid-cols-1 gap-6 px-6">
        <div className="bg-white p-12 rounded-3xl shadow-[0_20px_50px_-12px_rgba(6,27,14,0.03)] flex flex-col justify-between overflow-hidden relative group border border-surface-container-low">
          <div className="absolute -right-8 -top-8 opacity-5 group-hover:scale-110 transition-transform duration-1000">
            <Leaf size={240} />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary opacity-40">Current Status</span>
            <h2 className="text-3xl font-black mt-3 text-primary tracking-tight">状态极佳 - 5盆</h2>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className={cn(
                  "w-10 h-10 rounded-full border-4 border-white shadow-sm",
                  i === 1 ? "bg-tertiary-fixed" : i === 2 ? "bg-secondary-container" : "bg-primary-container"
                )} />
              ))}
            </div>
            <span className="text-xs font-black text-primary opacity-30">+2 others</span>
          </div>
        </div>

        <div className="bg-primary-container p-12 rounded-3xl flex flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="flex justify-between items-start relative z-10">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">植物含水量%</span>
              <div className="text-6xl font-black mt-2 tracking-tighter">85%</div>
            </div>
            <div className="p-4 bg-white/10 rounded-3xl backdrop-blur-md">
              <Droplets className="text-white w-8 h-8" />
            </div>
          </div>
          <div className="mt-10 relative z-10">
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-tertiary-fixed rounded-full" 
              />
            </div>
            <p className="mt-5 text-[10px] font-bold opacity-60 tracking-wide">如含水量低于20%时，请立即为植物补水</p>
          </div>
        </div>
      </section>

      {/* Calendar View */}
      <section className="bg-surface-container-low p-10 rounded-3xl border border-white mx-4">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-xl font-black text-primary tracking-tight">四月 2026</h3>
          <div className="flex gap-4">
            <button className="p-3 bg-white hover:bg-primary hover:text-white rounded-2xl transition-all shadow-sm">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-3 bg-white hover:bg-primary hover:text-white rounded-2xl transition-all shadow-sm">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 text-center text-[10px] font-black text-secondary opacity-30 mb-6 uppercase tracking-widest">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => <div key={day}>{day}</div>)}
        </div>
        
        <div className="grid grid-cols-7 gap-y-4">
          {Array.from({ length: 35 }).map((_, i) => {
            const day = i - 5;
            const isSelected = day === selectedDay;
            const hasEvent = day === 3 || day === 12;
            
            if (day < 1 || day > 30) {
              return <div key={i} className="aspect-square flex items-center justify-center text-[11px] font-bold text-secondary opacity-10">{day < 1 ? 31 + day : day - 30}</div>;
            }
            
            return (
              <div key={i} className="aspect-square flex items-center justify-center relative">
                <button 
                  onClick={() => setSelectedDay(day)}
                  className={cn(
                    "w-10 h-10 flex items-center justify-center rounded-2xl text-[13px] font-black transition-all duration-300",
                    isSelected ? "bg-primary text-white shadow-xl scale-125 z-10" : "text-primary hover:bg-white/50"
                  )}
                >
                  {day}
                  {hasEvent && !isSelected && (
                    <span className="absolute bottom-1 w-1 h-1 bg-tertiary-fixed rounded-full" />
                  )}
                  {isSelected && (
                    <motion.span 
                      layoutId="selected-indicator"
                      className="absolute -top-1 -right-1 w-3 h-3 bg-error border-2 border-white rounded-full" 
                    />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Service List */}
      <section className="space-y-8 pb-12 px-6">
        <div className="flex justify-between items-end">
          <h3 className="text-2xl font-black tracking-tight">待执行服务</h3>
          <span className="text-xs font-bold text-secondary opacity-60">October 12th</span>
        </div>
        <div className="space-y-4">
          <div 
            className="bg-white p-6 rounded-3xl flex items-center gap-6 group hover:bg-surface-bright transition-all cursor-pointer border border-surface-container-low shadow-sm"
            style={{ width: '314px' }}
          >
            <div className="w-16 h-16 rounded-2xl bg-tertiary-fixed flex items-center justify-center shrink-0 shadow-inner">
              <Leaf className="text-on-tertiary-fixed w-8 h-8" />
            </div>
            <div className="flex-grow">
              <h4 
                className="font-black text-primary tracking-tight"
                style={{ width: '93px', fontSize: '14px' }}
              >
                每周常规巡检
              </h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-bold text-secondary opacity-50">Assigned to:</span>
                <span 
                  className="text-xs font-black text-primary"
                  style={{ width: '29.8646px' }}
                >
                  青诚
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[9px] font-black px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full uppercase tracking-widest">pending</span>
              <div className="text-xs font-bold text-secondary opacity-30 mt-2 tracking-tighter">09:30 AM</div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-3xl flex items-center gap-6 opacity-40 grayscale border border-surface-container-low">
            <div className="w-16 h-16 rounded-2xl bg-surface-container-low flex items-center justify-center shrink-0">
              <Scissors className="text-primary w-8 h-8" />
            </div>
            <div className="flex-grow">
              <h4 
                className="font-black text-primary tracking-tight"
                style={{ width: '97.4375px', fontSize: '14px' }}
              >
                叶片清洁与修剪
              </h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-bold text-secondary opacity-50">Assigned to:</span>
                <span 
                  className="text-xs font-black text-primary"
                  style={{ width: '31.3021px' }}
                >
                  柳荫
                </span>
              </div>
            </div>
            <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">History</span>
          </div>
        </div>

        <button className="w-full py-6 bg-primary text-white rounded-full font-black text-lg shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4">
          <PlusCircle className="w-6 h-6" />
          预约额外服务
        </button>
      </section>
    </motion.div>
  );
}
