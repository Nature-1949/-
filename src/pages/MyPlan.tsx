import React from 'react';
import { motion } from 'motion/react';
import { Check, ShieldCheck, CreditCard } from 'lucide-react';
import { PLANTS } from '../constants';

export default function MyPlan() {
  const selectedPlants = [PLANTS[0], PLANTS[2]]; // Mock selected plants
  const monthlyTotal = selectedPlants.reduce((sum, p) => sum + p.price, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="px-6 space-y-12"
    >
      {/* Header */}
      <section className="mt-8">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-3 block">Checkout Summary</span>
        <h2 className="text-5xl font-black text-primary tracking-tighter leading-tight">确认租赁方案</h2>
      </section>

      {/* Selected Plants Portfolio */}
      <section className="space-y-6">
        {selectedPlants.map((plant) => (
          <div key={plant.id} className="flex items-center gap-6 p-5 bg-white rounded-3xl group hover:bg-surface-container-low transition-all duration-500 border border-surface-container-low">
            <div className="w-24 h-32 rounded-2xl overflow-hidden bg-surface-container-low shrink-0 shadow-sm">
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-black text-primary mb-1 tracking-tight">{plant.name.split(' · ')[0]}</h3>
              <p className="text-sm text-secondary font-bold opacity-60 mb-6">{plant.name.split(' · ')[1]}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-xs font-black text-primary">¥</span>
                <span className="text-2xl font-black text-primary tracking-tighter">{plant.price}.00</span>
                <span className="text-[10px] text-secondary uppercase tracking-widest font-black ml-2 opacity-40">/ Month</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Cost Breakdown Card */}
      <section className="bg-surface-container-low rounded-[2.5rem] p-10 shadow-[0_20px_50px_-20px_rgba(6,27,14,0.03)] border border-white">
        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-8 opacity-60">费用概览 · Summary</h4>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-on-surface-variant font-bold text-sm">月度租金总计</span>
            <span className="text-primary font-black text-lg tracking-tight">¥{monthlyTotal}.00</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-on-surface-variant font-bold text-sm">信用免押金</span>
              <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[9px] font-black rounded-full tracking-widest">CREDIT PASS</span>
            </div>
            <span className="text-secondary font-black text-lg tracking-tight">¥0.00</span>
          </div>
          <div className="h-px bg-outline-variant/20 my-6" />
          <div className="flex justify-between items-end pt-2">
            <div>
              <span className="text-sm font-black text-primary block mb-1">首次支付总额</span>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold opacity-40">Total First Payment</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-black text-primary">¥</span>
              <span className="text-5xl font-black text-primary tracking-tighter">{monthlyTotal}.00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Agreements & CTA */}
      <section className="space-y-8 pb-12">
        <div className="space-y-4">
          <label className="flex items-start gap-4 cursor-pointer group">
            <div className="mt-1 relative">
              <input 
                type="checkbox" 
                defaultChecked 
                className="peer appearance-none w-5 h-5 rounded-lg border-2 border-outline-variant checked:bg-primary checked:border-primary transition-all"
              />
              <Check className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
            </div>
            <span className="text-sm text-on-surface-variant leading-relaxed font-bold opacity-70">
              我已阅读并同意 <a href="#" className="text-primary underline underline-offset-4 decoration-tertiary-fixed decoration-4 hover:decoration-primary transition-all">租赁服务协议</a>
            </span>
          </label>
          <label className="flex items-start gap-4 cursor-pointer group">
            <div className="mt-1 relative">
              <input 
                type="checkbox" 
                defaultChecked 
                className="peer appearance-none w-5 h-5 rounded-lg border-2 border-outline-variant checked:bg-primary checked:border-primary transition-all"
              />
              <Check className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
            </div>
            <span className="text-sm text-on-surface-variant leading-relaxed font-bold opacity-70">
              开通 <span className="text-primary">自动续费</span>，享次月 95 折优惠
            </span>
          </label>
        </div>
        <button className="w-full bg-primary text-white py-6 rounded-full font-black text-xl shadow-2xl shadow-primary/20 hover:brightness-110 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-3">
          <CreditCard className="w-6 h-6" />
          确认支付
        </button>
        <p className="text-center text-[10px] text-secondary uppercase tracking-[0.4em] font-black pt-6 opacity-40">
          Secured by Flora Lease Encryption
        </p>
      </section>
    </motion.div>
  );
}
