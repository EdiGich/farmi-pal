"use client";

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, MapPin, Package, Info } from 'lucide-react';

const marketData = [
  {
    location: 'Kongowea Market',
    items: [
      { name: 'Coconut (Large)', price: '50-60 KES', trend: 'up' },
      { name: 'Maize (90kg)', price: '4800 KES', trend: 'down' },
      { name: 'Mango (Apple)', price: '20 KES', trend: 'stable' },
    ]
  },
  {
    location: 'Marikiti Market',
    items: [
      { name: 'Coconut (Medium)', price: '45 KES', trend: 'up' },
      { name: 'Cashew Nuts (1kg)', price: '120 KES', trend: 'stable' },
      { name: 'Bananas (Bunch)', price: '600 KES', trend: 'up' },
    ]
  }
];

export default function MarketBoard() {
  const [trends, setTrends] = useState<number[]>([]);

  useEffect(() => {
    // Generate random percentages once on mount
    setTrends(marketData[0].items.map(() => Math.floor(Math.random() * 15) + 1));
  }, []);

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-sm text-gray-800 uppercase tracking-tight flex items-center gap-2">
          <TrendingUp size={16} className="text-[#2D5A27]" />
          Bei za Soko (Kongowea)
        </h3>
        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded tracking-tighter">LEO</span>
      </div>

      <div className="space-y-3">
        {marketData[0].items.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-100/50 hover:bg-gray-100/80 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">
                {item.name.includes('Coconut') ? '🥥' : item.name.includes('Mango') ? '🥭' : '🌽'}
              </span>
              <div>
                <p className="text-[11px] font-bold text-gray-800 leading-none mb-1">{item.name}</p>
                <p className={`text-[9px] font-medium ${
                  item.trend === 'up' ? 'text-green-600' : 'text-red-500'
                }`}>
                  {item.trend === 'up' ? '↑' : '↓'} {trends[i] || '--'}% tangu jana
                </p>
              </div>
            </div>
            <p className="font-mono font-bold text-[#2D5A27] text-sm">{item.price}/-</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="p-3 bg-[#FFF9E6] rounded-xl border border-[#F27D26]/10 flex gap-3">
          <Info size={16} className="text-[#F27D26] shrink-0 mt-0.5" />
          <p className="text-[10px] text-gray-700 leading-relaxed italic">
            <strong>Kumbuka:</strong> Bei za soko hubadilika. Uliza FarmiPal mbinu za ku-negotiate na mabroker.
          </p>
        </div>
      </div>
    </div>
  );
}
