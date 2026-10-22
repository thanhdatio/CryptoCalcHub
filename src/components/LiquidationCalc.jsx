import React, { useState } from 'react';

export default function LiquidationCalc({ defaultExchange = 'Bybit' }) {
  const [exchange, setExchange] = useState(defaultExchange);
  const [entryPrice, setEntryPrice] = useState(65000);
  const [leverage, setLeverage] = useState(20);
  const [positionType, setPositionType] = useState('long');
  const [marginBalance, setMarginBalance] = useState(1000);

  // Công thức tính giá thanh lý cơ bản (Cross/Isolated mô phỏng)
  const calculateLiquidation = () => {
    const entry = parseFloat(entryPrice);
    const lev = parseFloat(leverage);
    if (!entry || !lev || lev <= 0) return 0;

    // Maintenance margin ước tính ~ 0.5%
    const mmr = 0.005; 
    let liqPrice = 0;
    if (positionType === 'long') {
      liqPrice = entry * (1 - (1 / lev) + mmr);
    } else {
      liqPrice = entry * (1 + (1 / lev) - mmr);
    }
    return liqPrice > 0 ? liqPrice.toFixed(2) : 0;
  };

  return (
    <div className="bg-dark-card border border-dark-border rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-emerald-400 flex items-center gap-2">
        <span>⚡</span> {exchange} Futures Liquidation Calculator
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm text-slate-400 mb-1">Position Type</label>
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => setPositionType('long')}
              className={`py-2 rounded-lg font-semibold transition ${positionType === 'long' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}`}
            >
              Long (Buy)
            </button>
            <button 
              onClick={() => setPositionType('short')}
              className={`py-2 rounded-lg font-semibold transition ${positionType === 'short' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400'}`}
            >
              Short (Sell)
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm text-slate-400 mb-1">Entry Price ($)</label>
          <input 
            type="number" 
            value={entryPrice} 
            onChange={(e) => setEntryPrice(e.target.value)}
            className="w-full bg-slate-900 border border-dark-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-400 mb-1">Leverage ({leverage}x)</label>
          <input 
            type="range" 
            min="1" 
            max="125" 
            value={leverage} 
            onChange={(e) => setLeverage(e.target.value)}
            className="w-full accent-emerald-500 mt-2"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-400 mb-1">Initial Margin ($)</label>
          <input 
            type="number" 
            value={marginBalance} 
            onChange={(e) => setMarginBalance(e.target.value)}
            className="w-full bg-slate-900 border border-dark-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500"
          />
        </div>
      </div>

      <div className="bg-slate-900/80 border border-slate-700/50 rounded-xl p-4 flex items-center justify-between">
        <div>
          <span className="text-sm text-slate-400 block">Estimated Liquidation Price</span>
          <span className="text-2xl font-black text-amber-400">${calculateLiquidation()}</span>
        </div>
        <a 
          href={`https://partner.${exchange.toLowerCase()}.com/join`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold px-5 py-2.5 rounded-xl shadow-lg transition text-sm flex items-center gap-2"
        >
          Trade on {exchange} & Save 20% Fees →
        </a>
      </div>
    </div>
  );
}
