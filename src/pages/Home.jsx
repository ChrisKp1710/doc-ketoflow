import React from 'react';
import { Layers, Lock, Gem, Database, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Mockup from '../components/Mockup';

export default function Home() {
    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            
            {/* HERO SECTION */}
            <header className="text-center py-10 border-b border-[var(--border-color)]">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 gradient-text">
                    🥑 KetoFlow
                </h1>
                <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                    iOS Development Master Plan v2.0
                </p>
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-bold">
                    <Clock size={16} />
                    Status: In Progress
                </div>
            </header>

            {/* NAV CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { to: "/architecture", icon: <Layers className="text-blue-500" size={32} />, title: "Architecture", desc: "System Context, Tech Stack & Offline Strategy.", color: "hover:border-blue-500/50" },
                    { to: "/auth", icon: <Lock className="text-indigo-500" size={32} />, title: "Auth & Sync", desc: "Sign in with Apple & Background Sync.", color: "hover:border-indigo-500/50" },
                    { to: "/ux", icon: <Gem className="text-pink-500" size={32} />, title: "UX Strategy", desc: "User Journey, Funnels & Freemium Model.", color: "hover:border-pink-500/50" },
                    { to: "/data", icon: <Database className="text-cyan-500" size={32} />, title: "Data Model", desc: "CoreData Entities & Supabase Schema.", color: "hover:border-cyan-500/50" }
                ].map((card, i) => (
                    <Link 
                        key={i} 
                        to={card.to} 
                        className={`card p-6 !mb-0 flex flex-col items-start gap-4 group hover:-translate-y-1 transition-all duration-300 ${card.color}`}
                    >
                        <div className="p-3 bg-[var(--bg-color)] rounded-xl group-hover:scale-110 transition-transform">
                            {card.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-1">{card.title}</h3>
                            <p className="text-sm text-[var(--text-secondary)]">{card.desc}</p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* VISION SECTION */}
            <section className="card">
                <h2 className="text-3xl mb-6">🚀 Vision & Overview</h2>
                <p className="text-lg opacity-80 mb-8">
                    KetoFlow semplifica la dieta chetogenica unendo un <strong>Diario Visivo</strong> (Free) con un <strong>Assistente AI</strong> (Premium). L'obiettivo è eliminare la frizione nell'inserimento dei dati.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl text-[var(--accent-color)] mb-4 flex items-center gap-2">
                             Pillars
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="bg-blue-100 dark:bg-blue-900 p-1 rounded text-blue-600 dark:text-blue-300">🔐</span>
                                <div><strong>Zero Friction Auth:</strong> Sign in with Apple invisibile.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="bg-yellow-100 dark:bg-yellow-900 p-1 rounded text-yellow-600 dark:text-yellow-300">⚡️</span>
                                <div><strong>Offline-First:</strong> Funziona sempre, sincronizza dopo.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="bg-purple-100 dark:bg-purple-900 p-1 rounded text-purple-600 dark:text-purple-300">☁️</span>
                                <div><strong>Ecosystem:</strong> Dati al sicuro e sincronizzati su cloud.</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl text-[var(--accent-color)] mb-4 flex items-center gap-2">
                             Pricing Model
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="bg-green-100 dark:bg-green-900 p-1 rounded text-green-600 dark:text-green-300">🆓</span>
                                <div><strong>Free Tier:</strong> Strumenti manuali solidi, nessun blocco.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="bg-pink-100 dark:bg-pink-900 p-1 rounded text-pink-600 dark:text-pink-300">💎</span>
                                <div><strong>Premium (€2/mo):</strong> Automazione AI, Velocità, Widgets.</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* MOCKUPS */}
            <section className="card bg-[var(--bg-color)] border-none shadow-none !p-0">
                 <h2 className="text-3xl mb-10 text-center">📱 Interface Concept</h2>
                 <div className="flex flex-wrap justify-center gap-10">
                     <Mockup 
                        title="Home Dashboard" 
                        content={`
┌────────────────────────────────┐
│  🥑 KetoFlow               ⚙️  │
├────────────────────────────────┤
│    CARBOIDRATI NETTI OGGI      │
│       12g / 20g                │
│   ██████████████░░░░░░         │
│                                │
│ ✅ In Chetosi  |  🔥 4 days    │
├────────────────────────────────┤
│ [ 📸 AI Scan ]  [ 🛒 Spesa ]   │
├────────────────────────────────┤
│  DIARIO VISIVO:                │
│  🍳 Colazione [FOTO] - 2g      │
│  🥗 Pranzo [FOTO] - 3g         │
│  🥩 Cena ...                   │
└────────────────────────────────┘`} 
                    />
                    <Mockup 
                        title="Smart Pantry" 
                        content={`
┌────────────────────────────────┐
│  🛒 La mia Spesa             + │
├────────────────────────────────┤
│                                │
│  FRIGO E LATTICINI             │
│  [ ] Yogurt Greco 0%           │
│  [x] Burro Chiarificato        │
│                                │
│  MACELLERIA                    │
│  [ ] Bacon (Scan: OK ✅)       │
│  [ ] Carne Macinata            │
│                                │
└────────────────────────────────┘`} 
                    />
                 </div>
            </section>
        </div>
    );
}
