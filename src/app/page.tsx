"use client";

import { motion } from 'motion/react';
import Chat from '@/components/Chat';
import MarketBoard from '@/components/MarketBoard';
import AgriTips from '@/components/AgriTips';
import { Menu, TreePalm } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F8F9FA] overflow-hidden">
      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#2D5A27] text-white flex flex-col p-6 shadow-xl
        transition-transform duration-300 lg:relative lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-[#F27D26] rounded-lg flex items-center justify-center text-xl font-bold text-white">
            P
          </div>
          <h1 className="text-xl font-bold tracking-tight">FarmiPal</h1>
        </div>

        <nav className="flex-1 space-y-2">
          <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg cursor-pointer">
            <span className="text-lg">💬</span>
            <span className="font-medium">Mjadala (Chat)</span>
          </div>
          <div className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg cursor-pointer transition-colors group">
            <span className="text-lg opacity-70 group-hover:opacity-100">📊</span>
            <span className="font-medium text-white/80 group-hover:text-white">Bei za Soko</span>
          </div>
          <div className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg cursor-pointer transition-colors group">
            <span className="text-lg opacity-70 group-hover:opacity-100">🎓</span>
            <span className="font-medium text-white/80 group-hover:text-white">Agri-Tutor</span>
          </div>
        </nav>

        <div className="mt-auto p-4 bg-black/10 rounded-xl border border-white/10 shrink-0">
          <p className="text-[10px] text-white/60 mb-1 uppercase tracking-wider">Hali ya Hewa: Mtwapa</p>
          <p className="text-lg font-semibold flex items-center gap-2">
            29°C <span className="text-xl">🌤️</span>
          </p>
          <p className="text-[10px] text-white/40 mt-2 italic">Active: Pwani Region</p>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <header className="h-16 bg-white border-b border-gray-200 px-6 lg:px-8 flex items-center justify-between shadow-sm shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu size={20} />
            </button>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-gray-500 hidden sm:inline">Sema Mkulima! FarmiPal iko Online</span>
            </div>
          </div>
          
          <div className="flex gap-4 items-center">
            <button className="px-4 py-1.5 border border-[#2D5A27] text-[#2D5A27] rounded-md text-sm font-bold hover:bg-[#2D5A27]/5 transition-colors hidden sm:block">
              Msaada wa Haraka
            </button>
            <div className="w-9 h-9 rounded-full bg-gray-200 border-2 border-white shadow-sm flex items-center justify-center text-[10px] font-bold text-gray-600">
              USER
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-6 grid grid-cols-12 gap-6 overflow-hidden">
          {/* Chat Container */}
          <section className="col-span-12 lg:col-span-7 h-full flex flex-col overflow-hidden">
            <Chat />
          </section>

          {/* Side Panels Container */}
          <section className="hidden lg:flex lg:col-span-12 xl:col-span-5 flex-col gap-6 overflow-y-auto no-scrollbar pb-6">
            <MarketBoard />
            <AgriTips />
          </section>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
