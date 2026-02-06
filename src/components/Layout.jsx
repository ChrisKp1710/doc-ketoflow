import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Sun, Moon, Home, Layers, Lock, Gem, Database, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Layout() {
    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { path: '/', label: 'Overview', icon: <Home size={20} /> },
        { path: '/architecture', label: 'Architecture', icon: <Layers size={20} /> },
        { path: '/auth', label: 'Auth & Sync', icon: <Lock size={20} /> },
        { path: '/ux', label: 'UX Strategy', icon: <Gem size={20} /> },
        { path: '/data', label: 'Data Model', icon: <Database size={20} /> },
    ];

    return (
        <div className="h-screen overflow-hidden flex flex-col md:flex-row bg-[var(--bg-color)] text-[var(--text-primary)] transition-colors duration-500">
            
            {/* MOBILE HEADER */}
            <div className="md:hidden flex items-center justify-between p-4 border-b border-[var(--border-color)] bg-[var(--card-bg)] shrink-0">
                <span className="font-bold text-lg">🥑 KetoFlow Docs</span>
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* SIDEBAR */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-[var(--card-bg)] border-r border-[var(--border-color)] p-6 transform transition-transform duration-300 ease-in-out
                md:relative md:translate-x-0
                ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="mb-10 hidden md:block">
                    <h1 className="text-2xl font-bold gradient-text">KetoFlow</h1>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">v2.0 Master Plan</p>
                </div>

                <nav className="space-y-2">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) => `
                                flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                                ${isActive 
                                    ? 'bg-[var(--accent-color)] text-white shadow-lg shadow-blue-500/20' 
                                    : 'hover:bg-[var(--bg-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                                }
                            `}
                        >
                            {item.icon}
                            <span className="font-medium">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="absolute bottom-6 left-6 right-6">
                    <div className="p-4 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color)]">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold">Theme</span>
                            <button 
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-[var(--card-bg)] transition-colors"
                            >
                                {theme === 'light' ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                        </div>
                        <div className="text-xs text-[var(--text-secondary)]">
                            {theme === 'light' ? 'Light Mode Active' : 'Dark Mode Active'}
                        </div>
                    </div>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 w-full overflow-y-auto">
                <div className="max-w-5xl mx-auto px-6 pt-6 pb-32 md:px-12 md:pt-12 md:pb-40">
                    <Outlet />
                </div>
            </main>

            {/* OVERLAY FOR MOBILE */}
            {menuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </div>
    );
}
