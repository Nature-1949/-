import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, ClipboardList, ShieldCheck, User, Search, Bell, Leaf } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto bg-surface relative shadow-2xl">
      {/* Header */}
      <header className="fixed top-0 w-full max-w-md z-50 bg-white/95 backdrop-blur-md border-b border-surface-container-low flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <Leaf className="text-primary w-6 h-6" />
          <span className="text-lg font-extrabold tracking-tight text-primary">森息 · Flora Lease</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-on-surface/70 hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-on-surface/70 hover:text-primary transition-colors">
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16 pb-24">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full max-w-md bg-white/90 backdrop-blur-lg border-t border-surface-container-low h-20 flex justify-around items-center px-4 z-50 rounded-t-xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(
              "flex flex-col items-center justify-center transition-all duration-300",
              isActive ? "text-primary scale-110" : "text-on-surface/40"
            )
          }
        >
          <Home className="w-6 h-6" />
          <span className="text-[10px] mt-1 font-bold uppercase tracking-widest">首页</span>
        </NavLink>
        <NavLink
          to="/my-plan"
          className={({ isActive }) =>
            cn(
              "flex flex-col items-center justify-center transition-all duration-300",
              isActive ? "text-primary scale-110" : "text-on-surface/40"
            )
          }
        >
          <ClipboardList className="w-6 h-6" />
          <span className="text-[10px] mt-1 font-bold uppercase tracking-widest">方案</span>
        </NavLink>
        <NavLink
          to="/maintenance"
          className={({ isActive }) =>
            cn(
              "flex flex-col items-center justify-center transition-all duration-300",
              isActive ? "text-primary scale-110" : "text-on-surface/40"
            )
          }
        >
          <ShieldCheck className="w-6 h-6" />
          <span className="text-[10px] mt-1 font-bold uppercase tracking-widest">养护</span>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            cn(
              "flex flex-col items-center justify-center transition-all duration-300",
              isActive ? "text-primary scale-110" : "text-on-surface/40"
            )
          }
        >
          <User className="w-6 h-6" />
          <span className="text-[10px] mt-1 font-bold uppercase tracking-widest">我的</span>
        </NavLink>
      </nav>
    </div>
  );
}
