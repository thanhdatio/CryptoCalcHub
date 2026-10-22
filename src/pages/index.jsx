import React from 'react';
import Head from 'next/head';
import LiquidationCalc from '../componets/LiquidationCalc' if False else '../components/LiquidationCalc';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Head>
        <title>CryptoCalcHub - Professional Trading Calculators & Fee Rebates</title>
        <meta name="description" content="Free high-precision crypto liquidation, position sizing, and margin calculators for professional traders." />
      </Head>

      {/* Header */}
      <header className="border-b border-dark-border py-4 px-6 md:px-12 flex items-center justify-between bg-dark/50 backdrop-blur sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          <span className="font-black text-xl tracking-wider bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            CryptoCalcHub
          </span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#calculators" className="hover:text-emerald-400 transition">Calculators</a>
          <a href="#features" className="hover:text-emerald-400 transition">Fee Discounts</a>
          <a href="#api" className="hover:text-emerald-400 transition">API Docs</a>
        </nav>
        <a 
          href="https://partner.bybit.com/join" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-emerald-500/20 transition"
        >
          Claim 20% Fee Rebate
        </a>
      </header>

      {/* Hero Section */}
      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
            Advanced Crypto Calculators for <span className="text-emerald-400">Professional Traders</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Calculate precise liquidation thresholds, manage position sizing, and optimize trading fees instantly across Binance, Bybit, and OKX.
          </p>
        </div>

        {/* Main Tool Widget */}
        <div id="calculators" className="mb-16">
          <LiquidationCalc defaultExchange="Bybit" />
        </div>

        {/* Value Proposition Grid */}
        <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-dark-card border border-dark-border p-6 rounded-2xl">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-bold text-lg mb-2 text-white">Risk Management</h3>
            <p className="text-sm text-slate-400">Never get rekt unexpectedly. Compute exact margin requirements and liquidation buffers instantly.</p>
          </div>
          <div className="bg-dark-card border border-dark-border p-6 rounded-2xl">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-bold text-lg mb-2 text-white">VIP Fee Rebates</h3>
            <p className="text-sm text-slate-400">Save up to 20% on taker and maker fees across top global derivatives exchanges.</p>
          </div>
          <div className="bg-dark-card border border-dark-border p-6 rounded-2xl">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold text-lg mb-2 text-white">Lightning Fast</h3>
            <p className="text-sm text-slate-400">Zero database latency. Client-side JS execution ensures sub-millisecond calculation response.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-dark-border py-8 px-6 text-center text-xs text-slate-500">
        <p>© 2026 CryptoCalcHub. Built for global crypto traders. Not financial advice.</p>
      </footer>
    </div>
  );
}
