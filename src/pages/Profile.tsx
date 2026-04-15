import React from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  ChevronRight, 
  Wallet, 
  ShieldCheck, 
  MapPin, 
  CreditCard, 
  Headphones, 
  Settings, 
  Users,
  Award,
  Zap,
  Leaf
} from 'lucide-react';
import { PLANTS } from '../constants';

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-10 pb-12"
    >
      {/* Profile Header */}
      <section className="flex flex-col items-center text-center space-y-4 mt-8 px-6">
        <div className="relative">
          <div className="w-28 h-28 rounded-full bg-surface-container-low p-1 shadow-inner">
            <div className="w-full h-full flex items-center justify-center bg-white rounded-full text-primary shadow-sm">
              <User size={48} strokeWidth={1.5} />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
            Gold
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-black tracking-tighter text-primary">Dex</h1>
          <p className="text-secondary text-xs font-bold tracking-[0.2em] opacity-40 mt-1">ID: FL-8819031</p>
        </div>
      </section>

      {/* Member Center Card */}
      <section className="px-4">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-container to-primary rounded-[2.5rem] p-8 text-white shadow-2xl">
          <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-tertiary-fixed/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-10">
              <div className="flex items-center gap-3">
                <Leaf className="text-tertiary-fixed w-8 h-8" />
                <h2 className="text-xl font-black tracking-tight">森息会员 <span className="font-bold opacity-40 text-xs ml-2 uppercase tracking-widest">Flora Member</span></h2>
              </div>
              <div className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full flex items-center gap-2 backdrop-blur-md">
                <Award size={14} className="text-tertiary-fixed" />
                <span className="text-[10px] font-black uppercase tracking-widest text-tertiary-fixed">Gold Member</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { icon: Award, label: '专属折扣', sub: 'Discounts' },
                { icon: Zap, label: '免费更换', sub: 'Replacement' },
                { icon: ShieldCheck, label: '优先养护', sub: 'Priority' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 backdrop-blur-sm">
                    <item.icon size={20} className="text-tertiary-fixed" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-black text-white">{item.label}</p>
                    <p className="text-[8px] font-bold text-white/40 uppercase tracking-widest">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full py-4 bg-tertiary-fixed text-on-tertiary-fixed rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] shadow-xl hover:brightness-110 active:scale-[0.98] transition-all">
              查看特权 View Privileges
            </button>
          </div>
        </div>
      </section>

      {/* Account / Credit Status */}
      <section className="grid grid-cols-2 gap-6 px-4">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col justify-between aspect-square border border-surface-container-low">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-surface-container-low flex items-center justify-center">
              <Wallet className="text-secondary w-5 h-5" />
            </div>
            <h3 className="mt-6 text-[10px] font-black text-primary tracking-[0.2em] uppercase opacity-40">账户余额</h3>
          </div>
          <div>
            <span 
              className="font-black text-primary tracking-tighter"
              style={{ width: '94px', height: 'auto', fontSize: '22px' }}
            >
              ¥ 768.58
            </span>
            <p className="text-[9px] text-outline-variant mt-2 uppercase tracking-[0.2em] font-black opacity-60">Available Credit</p>
          </div>
        </div>
        
        <div className="bg-primary-container p-8 rounded-[2.5rem] flex flex-col justify-between aspect-square text-white shadow-xl shadow-primary/10">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
              <ShieldCheck className="text-tertiary-fixed w-5 h-5" />
            </div>
            <h3 className="mt-6 text-[10px] font-black tracking-[0.2em] uppercase opacity-40">信用免押</h3>
          </div>
          <div>
            <p className="text-xs font-bold leading-relaxed">已开启极速免押<br />当前评估：<span className="text-tertiary-fixed">优秀</span></p>
            <div className="mt-4 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '80%' }}
                className="h-full bg-tertiary-fixed" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* My Leases */}
      <section className="space-y-6 px-6">
        <div className="flex justify-between items-end">
          <h2 className="text-2xl font-black text-primary tracking-tight">我的租赁</h2>
          <span className="text-[10px] text-secondary font-black uppercase tracking-widest border-b-2 border-tertiary-fixed pb-1">查看全部记录</span>
        </div>
        
        <div className="bg-surface-container-low p-6 rounded-[2rem] flex items-center gap-6 border border-white">
          <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-sm shrink-0">
            <img 
              src={PLANTS[3].image} 
              alt="Active" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h4 
                className="font-black text-primary text-sm tracking-tight"
                style={{ width: '109.1771px' }}
              >
                锦绣年华 · 黄蝉兰
              </h4>
              <span 
                className="font-black bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full uppercase tracking-widest"
                style={{ 
                  width: '46.9792px', 
                  paddingLeft: '9px',
                  marginLeft: '12px',
                  marginRight: '0px',
                  marginBottom: '3px',
                  marginTop: '1px',
                  fontSize: '9px'
                }}
              >
                进行中
              </span>
            </div>
            <p className="text-[10px] text-secondary font-bold mt-2 opacity-60">下轮养护: 2026.04.12</p>
          </div>
          <ChevronRight className="text-outline-variant w-5 h-5" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-3xl flex items-center gap-4 border border-surface-container-low shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-surface-container-low flex items-center justify-center">
              <Zap className="text-secondary w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-black text-primary">待收货</p>
              <p className="text-[10px] text-secondary font-bold opacity-40">1 个订单</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-3xl flex items-center gap-4 border border-surface-container-low shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-surface-container-low flex items-center justify-center">
              <CreditCard className="text-secondary w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-black text-primary">历史租赁</p>
              <p className="text-[10px] text-secondary font-bold opacity-40">8 次交付</p>
            </div>
          </div>
        </div>
      </section>

      {/* Management List */}
      <section className="bg-white rounded-3xl p-4 space-y-2 border border-surface-container-low shadow-sm mx-4">
        {[
          { icon: MapPin, label: '地址管理' },
          { icon: Award, label: '会员中心' },
          { icon: Headphones, label: '客服与支持' },
          { icon: Settings, label: '设置' }
        ].map((item, i) => (
          <React.Fragment key={item.label}>
            <button className="w-full flex items-center justify-between p-5 rounded-2xl hover:bg-surface-container-low transition-all group">
              <div className="flex items-center gap-5">
                <item.icon className="text-secondary group-hover:scale-110 transition-transform w-5 h-5" />
                <span className="text-sm font-black text-primary tracking-tight">{item.label}</span>
              </div>
              <ChevronRight className="text-outline-variant w-4 h-4" />
            </button>
            {i < 3 && <div className="mx-6 h-px bg-surface-container-low" />}
          </React.Fragment>
        ))}
      </section>

      {/* Community Section */}
      <section className="bg-surface-container-low rounded-3xl p-8 flex items-center justify-between gap-8 border border-white shadow-sm mx-4">
        <div className="flex-1 space-y-4">
          <h3 className="text-xl font-black text-primary tracking-tighter">加入社群，尽享优惠</h3>
          <p className="text-[11px] text-secondary font-bold leading-relaxed opacity-60">获取更多养护技巧与福利，与万千植友共同开启绿色生活。</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full">
            <Users size={14} className="text-primary" />
            <span className="text-[9px] font-black text-primary uppercase tracking-widest">Official Community</span>
          </div>
        </div>
        <div className="w-24 h-24 bg-white p-2 rounded-2xl shadow-xl flex-shrink-0 border border-surface-container-low">
          <img 
            alt="QR Code" 
            className="w-full h-full object-contain opacity-80" 
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=FloraLease" 
          />
        </div>
      </section>

      {/* Branding Footer */}
      <footer className="text-center py-12 space-y-6">
        <div className="inline-block p-6 bg-tertiary-fixed/20 rounded-3xl">
          <Leaf className="text-secondary w-10 h-10 opacity-40" />
        </div>
        <p className="text-[10px] font-black tracking-[0.5em] text-outline-variant uppercase opacity-40">
          The Botanical Gallery Experience
        </p>
      </footer>
    </motion.div>
  );
}
